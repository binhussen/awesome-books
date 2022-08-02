/** @format */
/** @format */

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const submit = document.querySelector('#submit');
const container = document.querySelector('.data-container');

let books = [];

const setLocalStorage = (books) => localStorage.setItem('books', JSON.stringify(books));

const getFromLocalStorage = () => {
  if (JSON.parse(localStorage.getItem('books'))) books = JSON.parse(localStorage.getItem('books'));
};

const displayBooks = () => {
  getFromLocalStorage();
  container.innerHTML = '';
  books.forEach((book, i) => {
    container.innerHTML += `<div class="book">
        <p><strong>${book.title}</strong></p>
        <p><strong>${book.author}</strong></p>
        </div>`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    container.appendChild(removeButton);

    container.innerHTML += `
        <hr/>`;

    const removeBtn = document.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      removeBook(i);
    });
  });
};

const clear = () => {
  title.value = '';
  author.value = '';
};

const addBook = (e) => {
  e.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  books.push(newBook);
  clear();
  setLocalStorage(books);
  displayBooks();
};

const removeBook = (i) => {
  const filteredBooks = books.filter((book) => book !== books[i]);
  setLocalStorage(filteredBooks);
  displayBooks();
};

submit.addEventListener('click', addBook);

document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});
