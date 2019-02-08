using System.Threading.Tasks;
using CustomerPortal.API.Models;

namespace CustomerPortal.API.Repos
{
    public interface IAppRepo
    {
         Task<bool> SaveAll();

         //Task<User> GetEmployee(string employeeId);

         //Task<User> GetEmployees();

         //Task<User> GetCustomer(string employeeId);

         //Task<User> GetCustomers();

         
    }
}