namespace CustomerPortal.API.Models
{
    public class Bank
    {
        public string Id { get; set; }
        
        public string Name { get; set; }

        public string IBAN { get; set; }

        //# forign key
        public string UserId { get; set; }
        //# navigation property
        public User User { get; set; }
    }
}