let table = document.getElementById('libraryTable');

class Book {
    constructor(title, author, pages, read, bookId) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.bookId = bookId;
    }
}

function createRow(title, author, pages, read, bookId) {

    //Define cells
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let statusCell = row.insertCell(3);
    let removeButtonCell = row.insertCell(4);
    let rowId = bookId;

    //Add values to cells
    titleCell.textContent = title;
    authorCell.textContent = author;
    pagesCell.textContent = pages;

    //Create label and checkbox element
    let newLabel = document.createElement('LABEL');
    let newCheckBox = document.createElement('INPUT');
    newLabel.setAttribute('for', "statusCheckbox");
    newCheckBox.setAttribute('type', 'checkbox');
    newCheckBox.setAttribute('name', 'statusCheckbox');
    newCheckBox.setAttribute('id', 'statusCheckbox');
    newLabel.textContent = 'Completed';
    newLabel.appendChild(newCheckBox);
    statusCell.appendChild(newLabel);

    if (read == true) {
        newCheckBox.checked = true;
    } else {
        newCheckBox.checked = false;
    }

    newCheckBox.addEventListener('change', function() {
        if (this.checked) {
            library[rowId].read = true;
        } else {
            library[rowId].read = false;
        }
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'REMOVE';
    deleteButton.id = 'deleteBtn';

    //Delete row and splice library array
    deleteButton.addEventListener('click', function() {
        row.parentNode.removeChild(row);
        library.splice(rowId, 1);
    });

    removeButtonCell.appendChild(deleteButton);
}

//HTML body
let body = document.querySelector('#cardContainer');

// Test books
let book1 = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 300, true, 0);
let book2 = new Book('The Two Towers', 'J.R.R Tolkien', 400, true, 1);
let book3 = new Book('The Return of the King', 'J.R.R Tolkien', 500, false, 2);
let book4 = new Book('The Return of the Ting', 'J.R.R Tolkien', 500, true, 3);
let book5 = new Book('The Return of the Bling', 'J.R.R Tolkien', 500, false, 4);

//Library array holding test books for debugging
let library = [book1, book2, book3, book4, book5];

// Adds new book object from text input to library array
function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}

library.forEach(book => {
    createRow(book.title, book.author, book.pages, book.read, book.bookId)
});