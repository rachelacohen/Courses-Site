using System.Diagnostics.Metrics;

namespace CoursesServer.Entities
{
    public enum TypeLearning { זום, פרונטלי }
    public class Course
    {
        static int countId = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int CountLessons { get; set; }
        public DateTime DateStart { get; set; }
        public List<string> Syllabus { get; set; }
        public TypeLearning Type { get; set; }
        public int LacturerId { get; set; }
        public string Image { get; set; }

        public Course()
        {
            Id = countId++;
        }
    }
}

