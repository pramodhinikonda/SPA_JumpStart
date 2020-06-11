using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPA_Start.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
    }
}