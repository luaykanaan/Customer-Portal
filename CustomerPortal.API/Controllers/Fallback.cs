//#
//#
//#
//#
//# This is not an API controller
//# This controller is used to tell the app how to handle non api calls
//# So basically, anything non api should be handled by the spa
//#
//#
//#
//#

using System.IO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CustomerPortal.API.Controllers
{
    [AllowAnonymous]
    public class Fallback : Controller
    {
        public IActionResult Index()
        {
            return new PhysicalFileResult(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}