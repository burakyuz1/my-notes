using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyNotesAPI.Data.Migrations
{
    public partial class mig_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "Id", "Content", "CreationTime", "ModifiedTime", "Title" },
                values: new object[] { 1, "Curabitur suscipit ante et lacus auctor, blandit rhoncus purus consectetur. Donec tempus ligula sit amet tempus pulvinar. Quisque tellus ligula, ultricies sit amet ligula sed, scelerisque pulvinar est. Fusce vulputate posuere odio, sed congue nunc fermentum malesuada. ", new DateTime(2022, 3, 22, 10, 36, 32, 777, DateTimeKind.Local).AddTicks(223), new DateTime(2022, 3, 22, 10, 36, 32, 777, DateTimeKind.Local).AddTicks(5958), "Sample Note 3" });

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "Id", "Content", "CreationTime", "ModifiedTime", "Title" },
                values: new object[] { 2, "Fusce lobortis sagittis velit. Mauris quis nibh at nisi elementum facilisis. Mauris turpis tellus, ullamcorper a aliquam in, gravida et purus. Donec ut magna a sapien dignissim fringilla a sed leo. Donec laoreet turpis nec libero luctus placerat. Nunc a erat eros. Aliquam quis lorem nec leo ultricies pharetra.", new DateTime(2022, 3, 22, 10, 36, 32, 777, DateTimeKind.Local).AddTicks(6814), new DateTime(2022, 3, 22, 10, 36, 32, 777, DateTimeKind.Local).AddTicks(6818), "Sample Note 2" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Notes");
        }
    }
}
