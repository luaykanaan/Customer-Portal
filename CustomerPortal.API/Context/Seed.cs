using System.Collections.Generic;
using System.Linq;
using CustomerPortal.API.Helpers;
using CustomerPortal.API.Models;
using Microsoft.AspNetCore.Identity;

namespace CustomerPortal.API.Context
{
    public class Seed
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public Seed(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public void SeedData()
        {
            if (!_userManager.Users.Any())
            {
                // seed roles first
                var roles = new List<IdentityRole>
                {
                    new IdentityRole{Name = "Customer"},
                    new IdentityRole{Name = "Support"},
                    new IdentityRole{Name = "Admin"}
                };

                foreach (var role in roles)
                {
                    _roleManager.CreateAsync(role).Wait();
                }

                var adminEmail = "admin@email.com";
                var defaultPassword = "Pa55w0rd!";

                // seed important users
                var adminUser =  new User { ReferenceNumber = "E111AE0001", UserType = UserType.Employee, KnownAs = "Admin Employee", Email = adminEmail, UserName = "AdminEmployee" };
                var result = _userManager.CreateAsync(adminUser, defaultPassword).Result; //do it like this because we can't add await
                if (result.Succeeded)
                {
                    var admin = _userManager.FindByEmailAsync(adminEmail).Result;
                    _userManager.AddToRoleAsync(admin, "Admin").Wait();
                }

                

                // seed random members
                
            }
        }
    }
}