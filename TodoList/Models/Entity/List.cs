namespace TodoList.Models.Entity
{
    public class List
    {
        public Guid Id { get; set; }
        public required string Judul { get; set; }
        public required string Deskripsi { get; set; }
    }
}
