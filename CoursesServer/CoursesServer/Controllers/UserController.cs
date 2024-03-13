using CoursesServer.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoursesServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> users = new List<User>
        {
            new User{Name="טובי", Address="בני ברק", Email="tovi@gmail.com", Password="1234"},
            new User{Name="רחלי", Address="בני ברק", Email="racheli@gmail.com", Password="1221"},
        };
        // GET: api/<UserController>
        [HttpGet]
        public ActionResult< IEnumerable<User>> Get()
        {
            return Ok(users);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            var li=users.Find(x => x.Id == id);
            if(li==null)    
                return NotFound();
            return Ok(li);
        }

        // POST api/<UserController>
        [HttpPost]
        public ActionResult Post([FromBody] User value)
        {
            users.Add(value);
            return Ok(users);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] User value)
        {
            var li=users.Find(x=>x.Id==id);
            if (li == null)
                return NotFound();
            li.Email = value.Email;
            li.Address = value.Address;
            li.Password = value.Password;
            return Ok(li);  

        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var li = users.Find(x => x.Id == id);
            if (li == null)
                return NotFound();
            users.Remove(li);
            return Ok(li);
        }
    }
}
