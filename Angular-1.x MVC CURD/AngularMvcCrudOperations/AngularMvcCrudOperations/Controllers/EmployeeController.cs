using System.Web.Mvc;
using AngularMvcCrudOperations.Models;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;

namespace AngularMvcCrudOperations.Controllers
{
    public class EmployeeController : Controller
    {
        private EmployeeDataContext _dataContext = null;

        public EmployeeController()
        {
            _dataContext = new EmployeeDataContext();
        }
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetEmployees()
        {
            List<Employee> listOfEmployees = _dataContext.Employees.ToList();
            return Json(new { list = listOfEmployees }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetEmployeeById(int employeeId)
        {
            var _employeeRecord = _dataContext.Employees.Where(employee => employee.Id == employeeId).SingleOrDefault();
            return Json(new { employee = _employeeRecord }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddEmployee(Employee employee)
        {
            _dataContext.Employees.Add(employee);
            _dataContext.SaveChanges();
            return Json(new { status = "employee record saved successfully" });

        }

        public JsonResult UpdateEmployee(Employee employee)
        {
            _dataContext.Entry(employee).State = EntityState.Modified;
            _dataContext.SaveChanges();

            return Json(new { status = "EmployeeRecord Updated successfully" });
        }

        public JsonResult DeleteEmployee(int employeeId)
        {
            var _employeeRecord = _dataContext.Employees.Where(employee => employee.Id == employeeId).SingleOrDefault();
            _dataContext.Employees.Remove(_employeeRecord);
            _dataContext.SaveChanges();
            return Json(new { status = "EmployeeRecord Deleted successfully" });
        }
    }
}