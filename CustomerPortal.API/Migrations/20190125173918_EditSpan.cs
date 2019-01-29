using Microsoft.EntityFrameworkCore.Migrations;

namespace CustomerPortal.API.Migrations
{
    public partial class EditSpan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SpanStatus",
                table: "Spans",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SpanStatus",
                table: "Spans");
        }
    }
}
