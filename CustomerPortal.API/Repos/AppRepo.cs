using System.Threading.Tasks;
using CustomerPortal.API.Context;
using CustomerPortal.API.Models;

namespace CustomerPortal.API.Repos
{
    public class AppRepo : IAppRepo
    {

        private readonly DataContext _context;

        public AppRepo(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
        
    }
}