/* TODO: 

[ ]  Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

[ ] Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

[ ] Add a button on each book’s display to remove the book from the library

    a. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

[ ] Add a button on each book’s display to change its read status
    a. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

*/

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

// ul of all cards
const cardList = document.querySelector(".cards");

const Book = function (title, author, pages) {
  let book = {};

  // parameters as keys to this object
  book.title = title;
  book.author = author;
  book.pages = pages;
  book.read = false;
  return book;
};


// function that adds new book to dom
const newBookCard = () => {
  // creates new li element
  card = document.createElement("li");
  // adds "cards_item" classname to li element
  card.classList.add("cards_item");

  cardList.appendChild(card); // appends new li to card ul

  // creates new card div
  cardDiv = document.createElement("div");
  // adding classname to new div
  cardDiv.classList.add("card");

  card.appendChild(cardDiv); // appending card div to card li

  cardContent = document.createElement("div");
  cardContent.classList.add("card_content");

  cardDiv.appendChild(cardContent); // append card_content div to card div

  cardTitle = document.createElement("h2"); // creates h2 element
  cardTitle.classList.add("card_title"); // adds 'card_title' class
  cardTitle.innerHTML = "Moby-Dick";

  // finally append book title to card_content div
  cardContent.appendChild(cardTitle);
};

// test books..
let hobbit = Book("The Hobbit", "J. R. R. Tolkien", 310);
let harryPotter = Book("Harry Potter", "J. K. Rowling", 223);
let greatGatsby = Book("The Great Gatsby", "F. Scott Fitzgerald", 208);
let mobyDick = Book("Moby-Dick", "Herman Melville", 378);

// test books..

// library array
let myLibrary = [hobbit, harryPotter, greatGatsby, mobyDick];

myLibrary.forEach((book) => {
  for (let key in book) {
    console.log(`${key}: ${book[key]}`);
  }
});

function addBookToLibrary(book) {
  const cards = document.querySelector(".cards");
  const cardItem = document.createElement("li");
  cardItem.appendChild(document.createTextNode(book.title));
  cards.appendChild(cardItem);
}

// popup modal
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit-button");

// display modal
function toggleModal() {
  modal.classList.toggle("show-modal");
}

// When the user clicks on the button, open the modal
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

// when user submits book
function onSubmit(event) {
  event.preventDefault(); // <-- prevents page from reloading upon clicking
  toggleModal(); // closes the modal
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
submitButton.addEventListener("click", onSubmit);

/* TODO: 
[ ] - create function that will add book into library. Must be visually displayed onto dom
[ ] - button to delete book from library
[x] - array to store library books created from Book constructor
*/
