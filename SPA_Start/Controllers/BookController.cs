using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SPA_Start.Models;

namespace SPA_Start.Controllers
{
    public class BookController : ApiController
    {
        Book[] books = new Book[] 
        { 
            new Book { Id = 1325, Name = "ASP-NET-Web-API-Building-Service", Category = "Computer Software", Price = 1 }, 
            new Book { Id = 2592, Name = "The Art of Electronics", Category = "Electronics", Price = 3.75M }, 
            new Book { Id = 3874, Name = "Harry Potter and the Prisoner of Azkaban", Category = "Novels", Price = 16.99M } 
        };

        public IEnumerable<Book> Get()
        {
            return books;
        }

        public IHttpActionResult Get(int id)
        {
            var book = books.FirstOrDefault((p) => p.Id == id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }
    }
}
