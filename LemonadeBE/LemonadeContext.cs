using Microsoft.EntityFrameworkCore;

namespace LemonadeBE;
public class LemonadeContext: DbContext
{
        public DbSet<Order> Orders => Set<Order>();
        public DbSet<Customer> Customers => Set<Customer>();
        public DbSet<Product> Products => Set<Product>();
        public LemonadeContext(DbContextOptions<LemonadeContext> options) : base(options) {}
                    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
        optionsBuilder.UseSqlServer(configuration.GetConnectionString("LemonadeContext"));
    }
        
}
  
