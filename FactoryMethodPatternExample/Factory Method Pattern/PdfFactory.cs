namespace FactoryMethodPatternExample
{
    // Concrete Factory - PDF
    public class PdfFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new PdfDocument();
        }
    }
}
