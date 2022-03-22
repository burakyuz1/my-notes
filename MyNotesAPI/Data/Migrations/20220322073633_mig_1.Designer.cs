﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyNotesAPI.Data;

namespace MyNotesAPI.Data.Migrations
{
    [DbContext(typeof(NotesDbContext))]
    [Migration("20220322073633_mig_1")]
    partial class mig_1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.15")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyNotesAPI.Data.Note", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreationTime")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ModifiedTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Id");

                    b.ToTable("Notes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Content = "Curabitur suscipit ante et lacus auctor, blandit rhoncus purus consectetur. Donec tempus ligula sit amet tempus pulvinar. Quisque tellus ligula, ultricies sit amet ligula sed, scelerisque pulvinar est. Fusce vulputate posuere odio, sed congue nunc fermentum malesuada. ",
                            CreationTime = new DateTime(2022, 3, 22, 10, 36, 32, 777, DateTimeKind.Local).AddTicks(223),
                            ModifiedTime = new DateTime(2022, 3, 22, 10, 36, 32, 777, DateTimeKind.Local).AddTicks(5958),
                            Title = "Sample Note 3"
                        },
                        new
                        {
                            Id = 2,
                            Content = "Fusce lobortis sagittis velit. Mauris quis nibh at nisi elementum facilisis. Mauris turpis tellus, ullamcorper a aliquam in, gravida et purus. Donec ut magna a sapien dignissim fringilla a sed leo. Donec laoreet turpis nec libero luctus placerat. Nunc a erat eros. Aliquam quis lorem nec leo ultricies pharetra.",
                            CreationTime = new DateTime(2022, 3, 22, 10, 36, 32, 777, DateTimeKind.Local).AddTicks(6814),
                            ModifiedTime = new DateTime(2022, 3, 22, 10, 36, 32, 777, DateTimeKind.Local).AddTicks(6818),
                            Title = "Sample Note 2"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}