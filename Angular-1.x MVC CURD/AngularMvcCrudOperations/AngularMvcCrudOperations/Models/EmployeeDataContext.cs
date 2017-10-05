using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularMvcCrudOperations.Models
{
    public class EmployeeDataContext :DbContext
    {
        public DbSet<Employee> Employees { get; set; }
    }
}