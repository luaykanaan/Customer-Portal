using AutoMapper;
using CustomerPortal.API.Models;

namespace CustomerPortal.API.Dtos
{
    public class MappingProfiles : Profile
    {

        public MappingProfiles()
        {
            CreateMap<DtoIncomingCustomerAdd, User>();
        }
        
    }
}