using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoList.Data;
using TodoList.Models;
using TodoList.Models.Entity;

namespace TodoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListsController : ControllerBase
    {
        private readonly WebDbContext dbContext;

        public ListsController(WebDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpGet]
        public IActionResult GetAllLists ()
        {
            var AllLists = dbContext.Lists.ToList();

            return Ok(AllLists);
        }

        [HttpPost]
        public IActionResult AddLists([FromBody] AddListsDb addListsDb)
        {
            var listsEntity = new List()
            {
                Judul = addListsDb.Judul,
                Deskripsi = addListsDb.Deskripsi
            };

            dbContext.Lists.Add(listsEntity);
            dbContext.SaveChanges();

            return StatusCode(201, listsEntity);
        }


        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateLists(Guid id, [FromBody] UpdateListDetail updateListDetail)
        {
            var list = dbContext.Lists.Find(id);

            if (list is null)
            {
                return NotFound();
            }
            list.Judul = updateListDetail.Judul;
            list.Deskripsi = updateListDetail.Deskripsi;

            dbContext.SaveChanges();

            return Ok(list);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteList(Guid id)
        {
            var list = dbContext.Lists.Find(id);

            if (list is null)
            {
                return NotFound();
            }

            dbContext.Lists.Remove(list);
            dbContext.SaveChanges();

            return NoContent();
        }

    }
}
