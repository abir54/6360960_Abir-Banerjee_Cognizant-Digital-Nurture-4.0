using System;

namespace SingletonPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Testing Singleton Logger...\n");

            // Get the logger instance and log a message
            Logger logger1 = Logger.GetInstance();
            logger1.Log("First log message.");

            // Get the logger instance again and log another message
            Logger logger2 = Logger.GetInstance();
            logger2.Log("Second log message.");

            // Verify both references are the same
            Console.WriteLine("\nAre both logger instances the same?");
            Console.WriteLine(Object.ReferenceEquals(logger1, logger2)
                ? "Yes ✅ - Singleton confirmed!"
                : "No ❌ - Singleton failed.");
        }
    }
}

