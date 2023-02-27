using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LemonadeBE.Migrations
{
    /// <inheritdoc />
    public partial class AddItemNameColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ItemName",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ItemName",
                table: "Products");
        }
    }
}
