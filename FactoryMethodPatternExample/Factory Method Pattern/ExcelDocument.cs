using System;

namespace FactoryMethodPatternExample
{
    // Concrete Product - Excel
    public class ExcelDocument : IDocument
    {
        public void Open()
        {
            Console.WriteLine("Opening Excel document...");
        }
    }
}
