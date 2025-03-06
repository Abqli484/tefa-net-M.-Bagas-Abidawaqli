using Microsoft.EntityFrameworkCore;
using TodoList.Models.Entity;

namespace TodoList.Data
{
    public class WebDbContext : DbContext
    {
        public WebDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<List> Lists { get; set; }
    }
}
