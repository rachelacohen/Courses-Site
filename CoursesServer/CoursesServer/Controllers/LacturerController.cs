using CoursesServer.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoursesServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LacturerController : ControllerBase
    {
        public static List<Lacturer> lacturers = new List<Lacturer>
        {
            new Lacturer{Name="טלי", Address="פתח תקווה", Email="tali@gmail.com", Password="1234"} ,
            new Lacturer{Name="גיל", Address="רמת השרון", Email="gil@gmail.com", Password="5678"} ,
            new Lacturer{Name="מירי", Address="בני ברק", Email="m7458@gmail.com", Password="7458"} ,
            new Lacturer{Name="משה", Address="תל אביב", Email="moshe@gmail.com", Password="1478"} ,
        };
        // GET: api/<LacturerController>
        [HttpGet]
        public ActionResult< IEnumerable<Lacturer>> Get()
        {
            return Ok(lacturers);
        }

        // GET api/<LacturerController>/5
        [HttpGet("{id}")]
        public ActionResult<Lacturer> Get(int id)
        {
            var li = lacturers.Find(x => x.Id == id);
            if (li == null)
                return NotFound();
            return Ok(li);
        }

        // POST api/<LacturerController>
        [HttpPost]
        public ActionResult Post([FromBody] Lacturer value)
        {
            lacturers.Add(value);
            return Ok();
        }

        // PUT api/<LacturerController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Lacturer value)
        {
            var li = lacturers.Find(x => x.Id == id);
            if(li==null)
                return NotFound();
            li.Email = value.Email;
            li.Address = value.Address;
            li.Password = value.Password;
        return Ok(li);
        }

        // DELETE api/<LacturerController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var li=lacturers.Find(x => x.Id == id);
            if (li == null)
                return NotFound();
            lacturers.Remove(li);
            return Ok();
        }
    }
}
