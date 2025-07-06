using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public class Retrieve
{
    public static async Task Run()
    {
        Console.OutputEncoding = System.Text.Encoding.UTF8; // Ensure UTF-8 output

        using var context = new AppDbContext();

        Console.WriteLine("🔍 Retrieving All Products:");
        var products = await context.Products.ToListAsync();
        foreach (var p in products)
            Console.WriteLine($"- {p.Name} | ₹{p.Price:F2}");

        Console.WriteLine("\n🔎 Finding Product by ID (ID = 1):");
        var product = await context.Products.FindAsync(1);
        if (product != null)
            Console.WriteLine($"✔ Found: {product.Name}");

        Console.WriteLine("\n💸 First Product Above ₹50,000:");
        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        if (expensive != null)
            Console.WriteLine($"💰 Expensive: {expensive.Name}");
    }
}
