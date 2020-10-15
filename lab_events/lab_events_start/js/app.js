document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


const form = document.querySelector("#new-item-form");
form.addEventListener("submit", handleFormSubmit);

const buttonPosition = document.querySelector("#reading-list");
const deleteButton = document.createElement("button");
buttonPosition.appendChild(deleteButton);
deleteButton.textContent = "Delete";

deleteButton.addEventListener("click", deleteReadingList);


});


const handleFormSubmit = function (event) {
  event.preventDefault();
  // console.dir(event);

  const bookEntry = document.createElement("ul");

  const title = document.createElement("li");
  title.textContent = `${event.target.title.value}`;
  bookEntry.appendChild(title);

  const author = document.createElement("li");
  author.textContent = `${event.target.author.value}`;
  bookEntry.appendChild(author);

  const category = document.createElement("li");
  category.textContent = `${event.target.category.value}`;
  bookEntry.appendChild(category);

  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(bookEntry);

  document.getElementById("new-item-form").reset();
};


const deleteReadingList = function (event) {
  const readingList = document.querySelector("#reading-list");

  const body = document.querySelector("body");
  body.removeChild(readingList);
};