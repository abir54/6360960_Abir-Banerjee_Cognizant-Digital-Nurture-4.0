using Microsoft.AspNetCore.Mvc;
using MyWebApiProject.Models;
using System.Collections.Generic;

namespace WebApiHandson2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            var employees = new List<Employee>
            {
                new Employee { Id = 1, Name = "John", Department = "HR" },
                new Employee { Id = 2, Name = "Jane", Department = "Finance" },
                new Employee { Id = 3, Name = "Alice", Department = "IT" }
            };

            return Ok(employees);
        }
    }
}
