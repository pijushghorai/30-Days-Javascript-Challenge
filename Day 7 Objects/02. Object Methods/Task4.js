const book = {
    title: "Ikigai: The Japanese Secret to a Joyful Life",
    author: "Hector Garcia, Francesc Miralles",
    year: 2016,
    updateYear: function(year) {
        this.year = year;
    }
}

console.log(book);
book.updateYear(2024)
console.log(book);