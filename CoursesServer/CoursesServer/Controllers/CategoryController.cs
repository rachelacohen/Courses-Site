using CoursesServer.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoursesServer.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public static List<Category> categories = new List<Category>
        {
            new Category(){Icon="bi bi-emoji-smile" ,Name="ילדים"},
            new Category(){Icon="bi bi-person" , Name="מבוגרים"},


        };

        // GET: api/<CategoryController>
        [HttpGet]
        public ActionResult< IEnumerable<Category>> Get()
        {
            return Ok(categories);
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public ActionResult<Category> Get(int id)
        {
            var li = categories.Find(x => x.Id == id);
            if (li != null)
                return Ok(li);
            return NotFound();
        }

        // POST api/<CategoryController>
        [HttpPost]
        public ActionResult Post([FromBody] Category value)
        {
            categories.Add(value);
            return Ok();
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Category value)
        {
            var li=categories.Find(x => x.Id == id);
            if (li == null)
                return NotFound();
            li.Name = value.Name;
            li.Icon = value.Icon;
            return Ok(li);

        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var li=categories.Find(x=>x.Id==id);    
            if(li==null)
                return NotFound();
            categories.Remove(li);
            return Ok(li);
        }
    }
}
