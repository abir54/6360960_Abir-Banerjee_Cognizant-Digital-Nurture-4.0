using System;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Set console to UTF-8 to support symbols like ₹
        Console.OutputEncoding = Encoding.UTF8;

        // 🔁 Uncomment one of the lines below to run the desired lab:

        // await RunLab4_Insert();        // Run this ONCE to insert data
        await Retrieve.Run();        // Run this to fetch and display data
    }

    static async Task RunLab4_Insert()
    {
        using var context = new AppDbContext();

        var electronics = new Category { Name = "Electronics" };
        var groceries = new Category { Name = "Groceries" };

        await context.Categories.AddRangeAsync(electronics, groceries);

        var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
        var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };

        await context.Products.AddRangeAsync(product1, product2);
        await context.SaveChangesAsync();

        Console.WriteLine("✅ Data inserted successfully.");
    }
}
