using System;
using System.Collections.Generic;
using System.Linq;

namespace EcommerceSearch
{
    class Program
    {
        // Linear search by product name
        public static Product LinearSearch(Product[] products, string target)
        {
            foreach (var product in products)
            {
                if (product.ProductName.Equals(target, StringComparison.OrdinalIgnoreCase))
                {
                    return product;
                }
            }
            return null;
        }

        // Binary search by product name (on sorted array)
        public static Product BinarySearch(Product[] sortedProducts, string target)
        {
            int left = 0;
            int right = sortedProducts.Length - 1;

            while (left <= right)
            {
                int mid = left + (right - left) / 2;
                int comparison = string.Compare(sortedProducts[mid].ProductName, target, true);

                if (comparison == 0)
                    return sortedProducts[mid];
                else if (comparison < 0)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }

        static void Main(string[] args)
        {
            // Step 1: Create some products
            Product[] products = new Product[]
            {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Apparel"),
                new Product(104, "Lamp", "Home"),
                new Product(105, "Backpack", "Accessories")
            };

            // Step 2: Linear Search
            Console.WriteLine("Linear Search for 'Shoes':");
            var linearResult = LinearSearch(products, "Shoes");
            Console.WriteLine(linearResult != null ? $"Found: {linearResult}" : "Not found");

            // Step 3: Binary Search
            Console.WriteLine("\nBinary Search for 'Lamp':");

            // Must sort before binary search
            Product[] sortedProducts = products.OrderBy(p => p.ProductName).ToArray();
            var binaryResult = BinarySearch(sortedProducts, "Lamp");
            Console.WriteLine(binaryResult != null ? $"Found: {binaryResult}" : "Not found");

            // Try searching for something missing
            Console.WriteLine("\nBinary Search for 'Tablet':");
            var missingResult = BinarySearch(sortedProducts, "Tablet");
            Console.WriteLine(missingResult != null ? $"Found: {missingResult}" : "Not found");
        }
    }
}
