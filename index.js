/* TODO: 
- fix current method books are added to library
- all books to be added by title, author, book, and
*/

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

let myLibrary = [];

// defining book class for when user adds a book
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // the constructor
  }
}

function addBookToLibrary() {}

document.getElementById("btn").addEventListener("click", addBookToLibrary);
