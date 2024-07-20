const book = {
    title: "Ikigai: The Japanese Secret to a Joyful Life",
    author: "Hector Garcia, Francesc Miralles",
    year: 2016,
    getDetails: function () {
        console.log(`${this.title} by ${this.author}`);
    }
}

book.getDetails()