using System;
using System.Collections.Generic;
using System.Text; // Required for Encoding

namespace FinancialForecasting
{
    class Program
    {
        static int recursiveCalls = 0;
        static int memoizedCalls = 0;

        static double ForecastRecursive(double baseValue, double growthRate, int years)
        {
            recursiveCalls++;
            Console.WriteLine($"[Recursive] Calculating Year {years}");

            if (years == 0)
                return baseValue;

            return ForecastRecursive(baseValue, growthRate, years - 1) * (1 + growthRate);
        }

        static double ForecastMemoized(double baseValue, double growthRate, int years, Dictionary<int, double> memo)
        {
            if (memo.ContainsKey(years))
            {
                Console.WriteLine($"[Memoized] Reusing cached value for Year {years}");
                return memo[years];
            }

            memoizedCalls++;
            Console.WriteLine($"[Memoized] Calculating Year {years}");

            double result = (years == 0)
                ? baseValue
                : ForecastMemoized(baseValue, growthRate, years - 1, memo) * (1 + growthRate);

            memo[years] = result;
            return result;
        }

        static void Main(string[] args)
        {
            // Enable UTF-8 to show ₹ properly
            Console.OutputEncoding = Encoding.UTF8;

            double baseValue = 1000.0;
            double growthRate = 0.05;
            int years = 5;

            Console.WriteLine("🔁 Recursive Forecast (No Optimization)");
            for (int i = 0; i <= years; i++)
            {
                double result = ForecastRecursive(baseValue, growthRate, i);
                Console.WriteLine($"Year {i}: ₹{result:F2}\n");
            }

            Console.WriteLine($"[Recursive] Total recursive calls: {recursiveCalls}\n");

            Console.WriteLine("🚀 Optimized Forecast using Memoization");
            Dictionary<int, double> memo = new Dictionary<int, double>();

            for (int i = 0; i <= years; i++)
            {
                double result = ForecastMemoized(baseValue, growthRate, i, memo);
                Console.WriteLine($"Year {i}: ₹{result:F2}\n");
            }

            Console.WriteLine($"[Memoized] Total actual calculations: {memoizedCalls}");
        }
    }
}
