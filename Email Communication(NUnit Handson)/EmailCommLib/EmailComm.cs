namespace EmailCommLib
{
    public class EmailComm
    {
        private readonly IMailService _mailService;

        public EmailComm(IMailService mailService)
        {
            _mailService = mailService;
        }

        public bool NotifyCustomer()
        {
            return _mailService.Send("cust@abc.com", "Hello from EmailComm");
        }
    }
}

