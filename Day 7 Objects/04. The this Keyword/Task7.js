const libery = {
  books: [
    {
      title: "Ikigai: The Japanese Secret to a Joyful Life",
      author: "Hector Garcia, Francesc Miralles",
      year: 2016,
      getTitleYear: function () {
        return `${this.title} (${this.year})`;
      }
    },
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      year: 2012,
      getTitleYear: function () {
        return `${this.title} (${this.year})`;
      }
    },
    {
      title: "The Blue Umbrella",
      author: " Ruskin Bond",
      year: 1974,
      getTitleYear: function () {
        return `${this.title} (${this.year})`;
      }
    },
    {
      title: "Five Point Someone",
      author: "Chetan Bhagat",
      year: 2004,
      getTitleYear: function () {
        return `${this.title} (${this.year})`;
      }
    },
    {
      title: "Do Epic Shit",
      author: "Ankur Warikoo",
      year: 2022,
      getTitleYear: function () {
        return `${this.title} (${this.year})`;
      }
    },
  ],
};

libery.books.forEach((book) => {
  console.log(book.getTitleYear());
});
