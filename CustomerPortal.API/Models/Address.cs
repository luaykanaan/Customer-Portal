namespace CustomerPortal.API.Models
{
    public class Address
    {
        public string Id { get; set; }

        public string Street { get; set; }

        public string HouseNumber { get; set; }

        public string Line2 { get; set; }

        public int PostCode { get; set; }

        public string City { get; set; }

        //# forign key
        public string UserId { get; set; }
        //# navigation property
        public User User { get; set; }
    }
}