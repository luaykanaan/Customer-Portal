using System.Collections.Generic;

namespace CustomerPortal.API.Models
{
    public class Meter
    {
        public string Id { get; set; }

        public string MeterNumber { get; set; }

        public ICollection<MeterReading> MeterReadings { get; set; }

        //# forign key
        public string UserId { get; set; }
        //# navigation property
        public User User { get; set; }
    }
}