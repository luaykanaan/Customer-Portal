using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using CustomerPortal.API.Context;
using CustomerPortal.API.Models;
using CustomerPortal.API.Repos;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace CustomerPortal.API
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //# connection string
            services.AddDbContext<DataContext>(options => options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));

            //# data section
            services.AddTransient<Seed>();
            services.AddScoped<IAppRepo, AppRepo>();

            //# identity
            services.AddIdentity<User, IdentityRole>
                (options => {
                options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._";
                options.User.RequireUniqueEmail = true;
                })
                .AddEntityFrameworkStores<DataContext>()
                .AddRoleValidator<RoleValidator<IdentityRole>>()
                .AddRoleManager<RoleManager<IdentityRole>>()
                .AddSignInManager<SignInManager<User>>();

            //# jwt token and authentication
            var jwtTokenKey = Configuration.GetSection("AppSettings:TokenKey").Value;
            var key = Encoding.ASCII.GetBytes(jwtTokenKey);
            services.AddAuthentication(options => {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options => {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });
            
            //# authorization plolicy for roles

            //# general settings
            services
                .AddMvc(options => {
                    var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
                    options.Filters.Add(new AuthorizeFilter(policy));
                })
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            //# third-party services
            services.AddAutoMapper();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, Seed seeder)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // gloobal error handler in production mode:
                app.UseExceptionHandler( builder => {
                    builder.Run(async context => {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            await context.Response.WriteAsync(error.Error.Message);
                        }
                    });
                });
            }

            //app.UseHttpsRedirection();
            seeder.SeedData();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes => { routes.MapSpaFallbackRoute( name: "spa-fallback", defaults: new { controller = "Fallback", action = "Index"} ); } );
        }
    }
}
