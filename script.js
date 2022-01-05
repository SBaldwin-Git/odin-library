class Book {
    constructor(title, author, pages, read, bookId) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.bookId = bookId;
    }
}

function createCard(title, author, pages, read, bookId) {

    //Card div
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    //
    // ID CREATOR TEST PLEASE DELETE AFTER
    cardDiv.id = 'bookNum' + bookId;
    // ID CREATOR TEST PLEASE DELETE AFTER
    //
    let cardId = bookId;

    //Headers
    let titleHeader = document.createElement('h1');
    titleHeader.textContent = 'Title:';
    let authorHeader = document.createElement('h2');
    authorHeader.textContent = 'Author:';
    let pagesHeader = document.createElement('h2');
    pagesHeader.textContent = 'Pages:';
    let readHeader = document.createElement('h2');
    readHeader.textContent = 'Status:';

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

    //Add all text elements to card
    cardDiv.appendChild(titleHeader);
    cardDiv.appendChild(bookTitle);
    cardDiv.appendChild(authorHeader);
    cardDiv.appendChild(bookAuthor);
    cardDiv.appendChild(pagesHeader);
    cardDiv.appendChild(bookPages);
    cardDiv.appendChild(readHeader);
    cardDiv.appendChild(bookIsRead);

    //Buttons
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'container';
    let statusButton = document.createElement('button');
    statusButton.textContent = 'UPDATE';
    statusButton.id = 'statusBtn';
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.id = 'deleteBtn';

    //Delete card and splice library array
    deleteButton.addEventListener('click', function() {
        cardDiv.parentNode.removeChild(cardDiv)
        library.splice(cardId, 1);
    });


    //Add card to body
    buttonDiv.appendChild(statusButton);
    buttonDiv.appendChild(deleteButton);
    cardDiv.appendChild(buttonDiv)
    body.appendChild(cardDiv);
}

//HTML body
let body = document.querySelector('#cardContainer');

// Test books
let book1 = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 300, true, 0);
let book2 = new Book('The Two Towers', 'J.R.R Tolkien', 400, true, 1);
let book3 = new Book('The Return of the King', 'J.R.R Tolkien', 500, false, 2);
let book4 = new Book('The Return of the Ting', 'J.R.R Tolkien', 500, false, 3);
let book5 = new Book('The Return of the Bling', 'J.R.R Tolkien', 500, false, 4);

//Library array holding test books for debugging
let library = [book1, book2, book3, book4, book5];

// Adds new book object from text input to library array
function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}

// library.forEach(book => {
//     createCard(book.title, book.author, book.pages, book.read, book.bookId)
// });