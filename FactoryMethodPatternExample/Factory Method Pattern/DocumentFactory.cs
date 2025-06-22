namespace FactoryMethodPatternExample
{
    // Creator - Abstract Factory
    public abstract class DocumentFactory
    {
        public abstract IDocument CreateDocument();
    }
}
