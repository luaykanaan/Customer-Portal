using System.Threading.Tasks;
using AutoMapper;
using CustomerPortal.API.Dtos;
using CustomerPortal.API.Models;
using CustomerPortal.API.Repos;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CustomerPortal.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IAppRepo _repo;
        private readonly IConfiguration _config;
        private readonly UserManager<User> _userManager;

        public CustomersController(IMapper mapper, IAppRepo repo, IConfiguration config, UserManager<User> userManager)
        {
            _userManager = userManager;
            _config = config;
            _repo = repo;
            _mapper = mapper;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddCustomer([FromBody]DtoIncomingCustomerAdd dto)
        {
            var defaultPassword = "Pa55w0rd!";
            var userToAdd = _mapper.Map<User>(dto);

            var result = await _userManager.CreateAsync(userToAdd, defaultPassword);

            if (result.Succeeded)
            {
                var user = await _userManager.FindByEmailAsync(dto.Email);
                await _userManager.AddToRoleAsync(user, "Customer");

                return Ok();
            }

            return BadRequest(result.Errors);
        }

    }
}