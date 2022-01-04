class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function createCard(title, author, pages, read) {

    //Card div
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    //Headers
    let titleHeader = document.createElement('h1');
    titleHeader.textContent = 'Title:';
    let authorHeader = document.createElement('h2');
    authorHeader.textContent = 'Author:';
    let pagesHeader = document.createElement('h2');
    pagesHeader.textContent = 'Pages:';
    let readHeader = document.createElement('h2');
    readHeader.textContent = 'Finished / Unfinished:';

    //Book info HTML
    let bookTitle = document.createElement('p');
    bookTitle.textContent = title;
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = author;
    let bookPages = document.createElement('p');
    bookPages.textContent = pages;
    let bookIsRead = document.createElement('p');

    if (read == true) {
        bookIsRead.textContent = 'Finished';
    } else {
        bookIsRead.textContent = 'Unfinished';
    }

    //Add all elements to card
    cardDiv.appendChild(titleHeader);
    cardDiv.appendChild(bookTitle);
    cardDiv.appendChild(authorHeader);
    cardDiv.appendChild(bookAuthor);
    cardDiv.appendChild(pagesHeader);
    cardDiv.appendChild(bookPages);
    cardDiv.appendChild(readHeader);
    cardDiv.appendChild(bookIsRead);
    //Add card to body
    body.appendChild(cardDiv);
}

//HTML body
let body = document.querySelector('#cardContainer');

// Test books
let book1 = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 300, true);
let book2 = new Book('The Two Towers', 'J.R.R Tolkien', 400, true);
let book3 = new Book('The Return of the King', 'J.R.R Tolkien', 500, false);
let book4 = new Book('The Return of the Ting', 'J.R.R Tolkien', 500, false);
let book5 = new Book('The Return of the Bling', 'J.R.R Tolkien', 500, false);

//Library array holding test books for debugging
let library = [book1, book2, book3, book4, book5];

// Adds new book object from text input to library array
function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}

library.forEach(book => {
    createCard(book.title, book.author, book.pages, book.read)
});