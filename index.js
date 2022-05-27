/* TODO: 
[x] - create function that will add book into library. Must be visually displayed onto dom
[ ] - button to delete book from library
[x] - array to store library books created from Book constructor
[ ] - refactor newBookCard function..
*/

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
const newBookCard = (title, author) => {
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

  cardImage = document.createElement("div");
  cardImage.classList.add("card_image");

  const img = document.createElement("img");
  img.src = "images/bookph.jpeg";

  cardDiv.appendChild(cardImage);
  cardImage.appendChild(img);

  cardContent = document.createElement("div");
  cardContent.classList.add("card_content");

  cardDiv.appendChild(cardContent); // append card_content div to card div

  cardTitle = document.createElement("h2"); // creates h2 element
  cardTitle.classList.add("card_title"); // adds 'card_title' class
  cardTitle.innerHTML = title;

  cardText = document.createElement("p");
  cardText.classList.add("card_text");
  cardText.innerHTML = author;
  // finally append book title to card_content div
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardText);
};

// test books..
let hobbit = Book("The Hobbit", "J. R. R. Tolkien", 310);
let harryPotter = Book("Harry Potter", "J. K. Rowling", 223);
let greatGatsby = Book("The Great Gatsby", "F. Scott Fitzgerald", 208);
let mobyDick = Book("Moby-Dick", "Herman Melville", 378);

// test books..

// library array
let myLibrary = [hobbit, harryPotter, greatGatsby, mobyDick];

for (const book of myLibrary) {
  newBookCard(book.title, book.author);
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
