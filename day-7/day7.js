// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book1 = {
    title: "Brief history of time",
    author: "Stephen Hawking",
    year: 1988,
    getDetails: function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    },
    updateYear: function(year) {
        this.year = year;
    },
    getTitleYear: function() {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
};

const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960
};

const book3 = {
    title: '1984',
    author: 'George Orwell',
    year: 1949
};


console.log(book1);
console.log();

// Task 2: Access and log the title and author properties of the book object.
console.log("Title: ", book1.title);
console.log("Author: ", book1.author);
console.log();

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log(book1.getDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book1.updateYear(2024);
console.log(book1);

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
library = {
    name: "lib college",
    books: [book1, book2, book3]
};

console.log(library);
console.log();

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Library name: ",library.name);
console.log("Book titles: "+ library.books.map(book => book.title));
console.log();

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log(book1.getTitleYear());
console.log();

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const property in book1) {
    console.log(`${property}: ${book1[property]}`);
}
console.log();

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Keys: ", Object.keys(book1));
console.log("Values", Object.values(book1));