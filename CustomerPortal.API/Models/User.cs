using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using CustomerPortal.API.Helpers;

namespace CustomerPortal.API.Models
{
    public class User : IdentityUser
    {
        //# general
        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public string Gender { get; set; }
        
        public DateTime DateCreated { get; set; }
        
        public DateTime LastActive { get; set; }

        public UserType UserType { get; set; } // to determine if employee or customer

        public string ReferenceNumber { get; set; } // auto generated as: (E or C) + (random 3 numbers from 111 to 999) + (first name initial) + (last name initial) + (auto-increment 4 numbers starting from 0001)

        public string KnownAs { get; set; } // if customer: will be (salutation based on gender) + (first name) + (last name) //\\ if employee: (first name) + (last name) + ((role))

        public ICollection<IdentityRole> Roles { get; set; }

        //# address
        public Address Address { get; set; }

        //# bank
        public Bank Bank { get; set; }

        //# meter
        public Meter Meter { get; set; }

        //# contract
        public Contract Contract { get; set; }

    }
}