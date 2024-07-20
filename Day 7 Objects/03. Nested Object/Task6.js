const libery = {
  books: [
    {
      title: "Ikigai: The Japanese Secret to a Joyful Life",
      author: "Hector Garcia, Francesc Miralles",
      year: 2016,
    },
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      year: 2012,
    },
    {
      title: "The Blue Umbrella",
      author: " Ruskin Bond",
      year: 1974,
    },
    {
      title: "Five Point Someone",
      author: "Chetan Bhagat",
      year: 2004,
    },
    {
      title: "Do Epic Shit",
      author: "Ankur Warikoo",
      year: 2022,
    },
  ],
};

libery.books.forEach((element) => {
  console.log(element.title);
});
