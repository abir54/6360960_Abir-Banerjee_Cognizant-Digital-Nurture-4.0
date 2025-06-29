using System.Net;
using System.Net.Mail;

namespace EmailCommLib
{
    public class MailService : IMailService
    {
        public bool Send(string to, string message)
        {
            var mail = new MailMessage("your_email@gmail.com", to, "Test Subject", message);
            var smtp = new SmtpClient("smtp.gmail.com", 587)
            {
                Credentials = new NetworkCredential("your_email", "your_password"),
                EnableSsl = true
            };
            smtp.Send(mail);
            return true;
        }
    }
}
