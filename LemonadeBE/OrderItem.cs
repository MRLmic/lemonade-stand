using System.ComponentModel.DataAnnotations;

namespace LemonadeBE;

public class OrderItem
{
    [Key]
    public int Id { get; set; }

    public int OrderId { get; set; }
}
