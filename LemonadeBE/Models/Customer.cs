using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace LemonadeBE
{
    public class Customer
    {
        [Key]
        public required int CustomerId { get; set; }

        public string? CustomerName { get; set; }

        public string? Contact { get; set; }

        public string? ContactType { get; set; }
        }
}
