using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApiHandson5.Models;

namespace WebApiHandson5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,POC")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new()
        {
            new Employee
            {
                Id = 1,
                Name = "Alice",
                Salary = 70000,
                Permanent = true,
                Department = new Department { Id = 1, Name = "IT" },
                Skills = new List<Skill>
                {
                    new Skill { Id = 1, Name = "C#" },
                    new Skill { Id = 2, Name = "React" }
                },
                DateOfBirth = new DateTime(1992, 5, 10)
            }
        };

        [HttpGet]
        [ProducesResponseType(typeof(List<Employee>), 200)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(employees);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Employee updatedEmployee)
        {
            if (id <= 0)
                return BadRequest("Invalid employee id");

            var emp = employees.FirstOrDefault(e => e.Id == id);
            if (emp == null)
                return BadRequest("Invalid employee id");

            emp.Name = updatedEmployee.Name;
            emp.Salary = updatedEmployee.Salary;
            emp.Permanent = updatedEmployee.Permanent;
            emp.Department = updatedEmployee.Department;
            emp.Skills = updatedEmployee.Skills;
            emp.DateOfBirth = updatedEmployee.DateOfBirth;

            return Ok(emp);
        }
    }
}
