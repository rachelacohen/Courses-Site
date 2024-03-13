namespace CoursesServer.Entities
{
    public class User
    {
        static int countId = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public User()
        {
            Id = countId++;
        }
    }
}
