using CoursesServer.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoursesServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        public static List<Course> courses = new List<Course>
        {
            new Course {Name="דרמחול", CategoryId=0,DateStart=new DateTime(2024, 3,20), Image= "/assets/drama.jpg", LacturerId=1, CountLessons=30,Type=TypeLearning.פרונטלי, Syllabus=new List<string>{"הצגה","מקהלה", "ריקוד", "מחזמר", "מופע סיום"} },
            new Course { Name="התעמלות",CategoryId=1,DateStart=new DateTime(), Image="/assets/jym.jpg", LacturerId=2, CountLessons=12,Type=TypeLearning.פרונטלי, Syllabus=new List<string>{"אירובי","התעמלות קרקע", "ריקוד", "עיצוב וחיטוב"}},
            new Course { Name="שחייה",CategoryId=0,DateStart=new DateTime(), Image=  "/assets/swimming.jpg", LacturerId=2, CountLessons=8,Type=TypeLearning.פרונטלי, Syllabus=new List<string>{"יסודות השחייה","שחיית חזה", "שחיית גב", "שחיית חתירה", "שחיית דולפין"} },
            new Course { Name="הפתעה",CategoryId=0,DateStart=new DateTime(), Image=  "/assets/surprise.jpg", LacturerId=3, CountLessons=20,Type=TypeLearning.פרונטלי, Syllabus=new List<string>{"אפייה","תכשיטנות", "בלונאות", "ציור","התעמלות"}},
            new Course { Name="ציור",CategoryId=0,DateStart=new DateTime(), Image=   "/assets/draw.jpg", LacturerId=4, CountLessons=30,Type=TypeLearning.זום, Syllabus=new List<string>{"יסודות הציור","ציור דמויות", "אקריליק", "שמן", "פחם", "מים"}},
            new Course { Name="אפייה",CategoryId=1,DateStart=new DateTime(), Image=  "/assets/bake2.jpg", LacturerId=4, CountLessons=30,Type=TypeLearning.זום, Syllabus=new List<string>{"פתיחה","פטיפורים", "עוגות ויטרינה", "מנות אחרונות", "עוגות ב 10 דקות"}},
            new Course { Name="נגרות",CategoryId=0,DateStart=new DateTime(), Image=  "/assets/nagar.jpg", LacturerId=3, CountLessons=30,Type=TypeLearning.פרונטלי, Syllabus=new List<string>{"הכרת העץ","קופסא", "הדום", "שרפרף", "צביעה"}},
            new Course { Name="אלקטרוניקה", CategoryId=1,DateStart=new DateTime(), Image="/assets/electronic2.jpg", LacturerId=3, CountLessons=30,Type=TypeLearning.פרונטלי, Syllabus=new List<string>{"יסודות האלקטרוניקה והחשמל","בניית משחק", "סגירת מעגל חשמלי", "מנורה"} },
        };
        // GET: api/<CourseController>
        [HttpGet]
        public ActionResult< IEnumerable<Course>> Get()
        {
            return Ok(courses);
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public ActionResult<Course> Get(int id)
        {
            var li = courses.Find(x => x.Id == id);
            if (li == null)
                return NotFound("the course didn't found");
            return Ok(li);
        }

        // POST api/<CourseController>
        [HttpPost]
        public ActionResult Post([FromBody] Course value)
        {
            if(courses.Find(x=>x.Id == value.Id) == null)
            courses.Add(value);
            else
            {
                var li = courses.Find(x => x.Id == value.Id);
                li.Name = value.Name;
                li.CategoryId = value.CategoryId;
                li.LacturerId = value.LacturerId;
                li.CountLessons = value.CountLessons;
                li.DateStart = value.DateStart;
                li.Image = value.Image;
                li.Syllabus = value.Syllabus;
                li.Type = value.Type;
            }
            return Ok();
        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Course value)
        {
            Console.WriteLine("hi im here");
            var li = courses.Find(x => x.Id == id);
            if (li == null)
                return NotFound();
            li.Name = value.Name;
            li.CategoryId = value.CategoryId;
            li.LacturerId=value.LacturerId;
            li.CountLessons = value.CountLessons;
            li.DateStart=value.DateStart;
            li.Image=value.Image;
            li.Syllabus=value.Syllabus;
            li.Type=value.Type;
            return Ok(li);
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var li=courses.Find(x => x.Id == id);
            if (li == null)
                return NotFound();
            courses.Remove(li);
            return Ok();
        }
    }
}
