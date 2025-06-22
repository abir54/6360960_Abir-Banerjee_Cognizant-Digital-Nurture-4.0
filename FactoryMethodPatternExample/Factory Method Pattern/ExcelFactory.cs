namespace FactoryMethodPatternExample
{
    // Concrete Factory - Excel
    public class ExcelFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new ExcelDocument();
        }
    }
}
