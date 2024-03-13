namespace CoursesServer.Entities
{
    public class Category
    {
        static int countId = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public Category()
        {
           Id= countId++;
        }
    }
}
