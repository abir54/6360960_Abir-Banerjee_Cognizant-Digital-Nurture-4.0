using Microsoft.AspNetCore.Mvc;
using WebApiHandson3.Models;
using WebApiHandson3.Filters;

namespace WebApiHandson3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ServiceFilter(typeof(CustomAuthFilter))]
    [TypeFilter(typeof(CustomExceptionFilter))]
    public class EmployeeController : ControllerBase
    {
        private List<Employee> employees;

        public EmployeeController()
        {
            employees = GetStandardEmployeeList();
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Employee>), 200)]
        [ProducesResponseType(500)]
        public ActionResult<List<Employee>> Get()
        {
            // Uncomment below to simulate exception
            // throw new Exception("Test exception for filter");

            return Ok(employees);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee emp)
        {
            employees.Add(emp);
            return CreatedAtAction(nameof(Get), new { id = emp.Id }, emp);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Employee emp)
        {
            var existing = employees.FirstOrDefault(e => e.Id == id);
            if (existing == null) return NotFound();

            existing.Name = emp.Name;
            existing.Salary = emp.Salary;
            existing.Department = emp.Department;
            existing.Skills = emp.Skills;
            existing.Permanent = emp.Permanent;
            return Ok(existing);
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "John Doe",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department { Id = 1, Name = "IT" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 1, Name = "C#" },
                        new Skill { Id = 2, Name = "SQL" }
                    },
                    DateOfBirth = new DateTime(1990, 1, 1)
                }
            };
        }
    }
}
