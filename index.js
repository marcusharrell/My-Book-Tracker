// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
const btn = document.getElementById("btn");
var disp = document.getElementById("booktitle");

let myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // the constructor
  }
}

// function to that adds text inputed from form to the users library
function addBookToLibrary() {
  const book = new Book();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  book.title = title;
  book.author = author;
  myLibrary.push(book);

  // janky way to add text to dom below 
  disp.innerHTML = `Title: ${book.title}
                    Author: ${book.author}`;
}
// I know the template literal string above is less than optimal. Will create a function to pass that adds book to dom..

document.getElementById("btn").addEventListener("click", addBookToLibrary);
