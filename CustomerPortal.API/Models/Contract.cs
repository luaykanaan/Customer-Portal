using System.Collections.Generic;
using CustomerPortal.API.Helpers;

namespace CustomerPortal.API.Models
{
    public class Contract
    {
        public string Id { get; set; }

        public string ContractNumber { get; set; } // auto generated as: (V) + (random 3 numbers from 111 to 999) + (random 2 letter) + (auto-increment 4 numbers starting from 0001)

        public ContractStatus ContractStatus { get; set; }

        public ICollection<Span> Spans { get; set; }

        //# forign key
        public string UserId { get; set; }
        //# navigation property
        public User User { get; set; }
    }
}