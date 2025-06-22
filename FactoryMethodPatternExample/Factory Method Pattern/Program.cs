using System;

namespace FactoryMethodPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Factory Method Pattern: Document Creation\n");

            // Create and open Word document
            DocumentFactory wordFactory = new WordFactory();
            IDocument wordDoc = wordFactory.CreateDocument();
            wordDoc.Open();

            // Create and open PDF document
            DocumentFactory pdfFactory = new PdfFactory();
            IDocument pdfDoc = pdfFactory.CreateDocument();
            pdfDoc.Open();

            // Create and open Excel document
            DocumentFactory excelFactory = new ExcelFactory();
            IDocument excelDoc = excelFactory.CreateDocument();
            excelDoc.Open();

            Console.WriteLine("\nAll documents created using Factory Method.");
        }
    }
}
