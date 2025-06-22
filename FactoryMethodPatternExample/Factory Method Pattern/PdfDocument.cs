using System;

namespace FactoryMethodPatternExample
{
    // Concrete Product - PDF
    public class PdfDocument : IDocument
    {
        public void Open()
        {
            Console.WriteLine("Opening PDF document...");
        }
    }
}
