namespace FactoryMethodPatternExample
{
    // Concrete Factory - Word
    public class WordFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new WordDocument();
        }
    }
}
