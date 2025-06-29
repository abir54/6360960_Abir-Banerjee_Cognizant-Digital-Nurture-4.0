using NUnit.Framework;
using Moq;
using EmailCommLib;

namespace EmailCommLibTests
{
    [TestFixture]
    public class EmailCommTests
    {
        private EmailComm? _emailComm;
        private Mock<IMailService>? _mockMailService;

        [SetUp]
        public void Setup()
        {
            _mockMailService = new Mock<IMailService>();
            _mockMailService
                .Setup(m => m.Send(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(true);

            _emailComm = new EmailComm(_mockMailService.Object);
        }

        [Test]
        public void NotifyCustomer_ShouldReturnTrue_WhenEmailIsSent()
        {
            bool result = _emailComm!.NotifyCustomer();

            Assert.That(result, Is.True);
        }
    }
}
