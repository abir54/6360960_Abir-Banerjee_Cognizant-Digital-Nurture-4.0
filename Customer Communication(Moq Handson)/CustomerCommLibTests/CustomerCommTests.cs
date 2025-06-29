using NUnit.Framework;
using Moq;
using CustomerCommLib;

namespace CustomerCommLibTests
{
    [TestFixture]
    public class CustomerCommTests
    {
        private Mock<IMailSender>? _mockMailSender;
        private CustomerComm? _customerComm;

        [SetUp]
        public void Setup()
        {
            _mockMailSender = new Mock<IMailSender>();
            _mockMailSender.Setup(x => x.SendMail(It.IsAny<string>(), It.IsAny<string>())).Returns(true);

            _customerComm = new CustomerComm(_mockMailSender.Object);
        }

        [Test]
        public void SendMailToCustomer_ShouldReturnTrue_WhenEmailIsSent()
        {
            var result = _customerComm!.SendMailToCustomer();
            Assert.That(result, Is.True);
        }
    }
}
