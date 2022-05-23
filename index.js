/* TODO: 

[ ]  Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

[ ] Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

[ ] Add a button on each book’s display to remove the book from the library

    a. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

[ ] Add a button on each book’s display to change its read status
    a. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

*/

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:


// defining book class for when user adds a book

let myLibrary = [];

const disp = document.getElementById("booktitle")

// object constructor to create Book object with properties of title, author, and pages

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

// calling the constructor function to create new Book object, while passing book info to object 
const hobbit = new Book("The Hobbit", "J. R. R. Tolkien", 295)

const harryPotter = new Book("Harry Potter", "J. K. Rowling", 223)



myLibrary.push(harryPotter, hobbit)


function addBookToLibrary() {
  // for of loop to iterate through every object in array
 for (const book of myLibrary){
  const newBook = document.createTextNode(book.title)
  disp.appendChild(newBook)
 }
}

document.getElementById("btn").addEventListener("click", addBookToLibrary);
