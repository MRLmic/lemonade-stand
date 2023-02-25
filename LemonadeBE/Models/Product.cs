using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;



namespace LemonadeBE
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        public string? Size { get; set; }

        public string? Flavor { get; set; }
        }
}
