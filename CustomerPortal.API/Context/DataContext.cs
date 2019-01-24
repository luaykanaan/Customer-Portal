using CustomerPortal.API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CustomerPortal.API.Context
{
    public class DataContext : IdentityDbContext<User>
    {
        // DbSets: 
        public DbSet<Address> Addresses { get; set; }

        public DbSet<Bank> Banks { get; set; }

        public DbSet<Meter> Meters { get; set; }

        public DbSet<Contract> Contracts { get; set; }

        public DbSet<MeterReading> MeterReadings { get; set; }

        public DbSet<Span> Spans { get; set; }
        
        //constructor
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // call base
            base.OnModelCreating(builder);

            // do your thing
            
        }



    }
}