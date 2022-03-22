using System.ComponentModel.DataAnnotations;

namespace MyNotesAPI.DTOs
{
    public class PutNoteDTO
    {
        public int Id { get; set; }
        [Required, MaxLength(255)]
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
