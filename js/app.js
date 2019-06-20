document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const reading_List = document.querySelector("#reading-list");

  const handleDeleteButton = function () {
    while (reading_List.firstChild) {
      reading_List.removeChild(reading_List.firstChild);
    }
  };

  const handleFormSubmit = function (evt) {
    evt.preventDefault();
    const title = evt.target.title.value;
    const author = evt.target.author.value;
    const category = evt.target.category.value;

    if (document.querySelectorAll('ul').length === 0) {
      const deleteButton = document.createElement("button");
      const deleteText = document.createTextNode("Delete All");
      deleteButton.appendChild(deleteText);
      deleteButton.addEventListener("click", handleDeleteButton);
      deleteButton.classList.add("btn");
      reading_List.appendChild(deleteButton);
    }

    const newList = document.createElement("ul");
    let newListItem = document.createElement("li");
    newListItem.textContent = `Title: ${title}`;
    newListItem.classList.add("title");
    newList.appendChild(newListItem);
    newListItem = document.createElement("li");
    newListItem.textContent = `Author: ${author}`;
    newListItem.classList.add("author");
    newList.appendChild(newListItem);
    newListItem = document.createElement("li");
    newListItem.textContent = `Category: ${category}`;
    newListItem.classList.add("category");
    newList.appendChild(newListItem);
    reading_List.appendChild(newList);

    form.reset();
  };

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

})
