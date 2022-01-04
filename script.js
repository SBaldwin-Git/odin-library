class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    getInfo() {
        return this.title + ',' + this.author + ',' + this.pages + ',' + this.read;
    }
}

// Test books
let book1 = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 300, true);
let book2 = new Book('The Two Towers', 'J.R.R Tolkien', 400, true);
let book3 = new Book('The Return of the King', 'J.R.R Tolkien', 500, false);

//Library array holding test books for debugging
let library = [book1, book2, book3];

// Adds new book object from text input to library array
function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}

console.log(library[0].getInfo());