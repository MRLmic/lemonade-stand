using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LemonadeBE.Migrations
{
    /// <inheritdoc />
    public partial class addOrdersColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Orders",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Orders",
                table: "Orders");
        }
    }
}
