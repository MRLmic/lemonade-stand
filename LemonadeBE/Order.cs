using System.ComponentModel.DataAnnotations;

namespace LemonadeBE;

public class Order
{
    [Key]
    public int Id { get; set; }

    public int CustomerId { get; set; }

    public List<OrderItem> OrderItems { get; } = new List<OrderItem>();
    }
