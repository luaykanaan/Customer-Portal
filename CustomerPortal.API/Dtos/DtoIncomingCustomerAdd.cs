using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CustomerPortal.API.Helpers;
using CustomerPortal.API.Models;
using Microsoft.AspNetCore.Identity;

namespace CustomerPortal.API.Dtos
{
    public class DtoIncomingCustomerAdd
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }

        public string UserName { get; set; }

        public DateTime DateCreated { get; set; }
        
        public DateTime LastActive { get; set; }

        public UserType UserType { get; set; } // to determine if employee or customer

        public string ReferenceNumber { get; set; } // auto generated as: (E or C) + (random 3 numbers from 111 to 999) + (first name initial) + (last name initial) + (auto-increment 4 numbers starting from 0001)

        public string KnownAs { get; set; } // (first name) + (last name)

        //# address
        public Address Address { get; set; }

        //# bank
        public Bank Bank { get; set; }

        //# meter
        public Meter Meter { get; set; }

        //# contract
        public Contract Contract { get; set; }

        public DtoIncomingCustomerAdd()
        {
            DateCreated = DateTime.Now;
            LastActive = DateTime.Now;
            UserType = UserType.Customer;
            KnownAs = FirstName + " " + LastName;
            UserName = Email;
        }
    }
}