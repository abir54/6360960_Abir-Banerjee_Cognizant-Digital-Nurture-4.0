using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApiHandson3.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var exception = context.Exception;
            var logPath = Path.Combine(Directory.GetCurrentDirectory(), "errors.txt");

            File.AppendAllText(logPath, $"[{DateTime.Now}] {exception.Message}{Environment.NewLine}");

            context.Result = new ObjectResult("An unexpected error occurred.")
            {
                StatusCode = 500
            };
        }
    }
}
