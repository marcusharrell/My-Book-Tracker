/* TODO: 

[ ]  Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

[ ] Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

[ ] Add a button on each book’s display to remove the book from the library

    a. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

[ ] Add a button on each book’s display to change its read status
    a. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

*/

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}






let myLibrary = [];

function Book() {
  // the construcor...
}

function addBookToLibrary() {
  // do stuff here
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
