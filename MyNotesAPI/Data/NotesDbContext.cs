using Microsoft.EntityFrameworkCore;

namespace MyNotesAPI.Data
{
    public class NotesDbContext : DbContext
    {
        public NotesDbContext(DbContextOptions<NotesDbContext> options) : base(options)
        {
        }
        public DbSet<Note> Notes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Note>().HasData(
                new Note() { Id = 1, Content = "Curabitur suscipit ante et lacus auctor, blandit rhoncus purus consectetur. Donec tempus ligula sit amet tempus pulvinar. Quisque tellus ligula, ultricies sit amet ligula sed, scelerisque pulvinar est. Fusce vulputate posuere odio, sed congue nunc fermentum malesuada. ", Title = "Sample Note 3" },
                new Note() { Id = 2, Content = "Fusce lobortis sagittis velit. Mauris quis nibh at nisi elementum facilisis. Mauris turpis tellus, ullamcorper a aliquam in, gravida et purus. Donec ut magna a sapien dignissim fringilla a sed leo. Donec laoreet turpis nec libero luctus placerat. Nunc a erat eros. Aliquam quis lorem nec leo ultricies pharetra.", Title = "Sample Note 2" }
                );
        }
    }
}
