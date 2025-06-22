using System;

namespace FactoryMethodPatternExample
{
    // Concrete Product - Word
    public class WordDocument : IDocument
    {
        public void Open()
        {
            Console.WriteLine("Opening Word document...");
        }
    }
}
