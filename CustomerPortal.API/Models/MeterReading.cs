using System;

namespace CustomerPortal.API.Models
{
    public class MeterReading
    {
        public string Id { get; set; }

        public int Reading { get; set; }

        public DateTime Date { get; set; }

        //# forign key
        public string MeterId { get; set; }
        //# navigation property
        public Meter Meter { get; set; }
    }
}