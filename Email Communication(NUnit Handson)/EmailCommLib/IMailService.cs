namespace EmailCommLib
{
    public interface IMailService
    {
        bool Send(string to, string message);
    }
}
