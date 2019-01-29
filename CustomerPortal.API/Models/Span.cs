using System;
using CustomerPortal.API.Helpers;

namespace CustomerPortal.API.Models
{
    public class Span
    {
        public string Id { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public bool AutoRenew { get; set; }

        public float KwhRate { get; set; }

        public int EstimatedConsumption { get; set; }

        public int ReadingAtStart { get; set; }

        public int ReadingAtEnd { get; set; }

        public int ActualConsumption { get; set; }

        public SpanStatus SpanStatus { get; set; }

        //# forign key
        public string ContractId { get; set; }
        //# navigation property
        public Contract Contract { get; set; }


    }
}