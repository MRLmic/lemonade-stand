using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace LemonadeBE;

public class Order
{
    [Key]
    public int OrderId { get; set; }
    public string Customer { get; set; }

    public virtual ICollection<Product> Products { get; set; }
    }
