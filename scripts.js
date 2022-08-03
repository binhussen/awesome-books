/** @format */
/** @format */

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const submit = document.querySelector('#submit');
const container = document.querySelector('.data-container');
let sections = document.getElementsByClassName('container');
const listSection = document.getElementById('listSection');
const addNewSection = document.getElementById('addNewSection');
const contactSection = document.getElementById('contactSection');
const dateTime = document.getElementById('dateTime');

class Books {
  books;

  constructor() {
    this.getFromLocalStorage();
  }

  setLocalStorage = (newBooks) => localStorage.setItem('books', JSON.stringify(newBooks));

  getFromLocalStorage = () => {
    this.books = JSON.parse(localStorage.getItem('books')) ?? [];
  };

  displayBooks = () => {
    this.getFromLocalStorage();
    container.innerHTML = '';
    this.books.forEach((book, i) => {
      container.innerHTML += `<div class="book">
          <p><q>${book.title}</q> by ${book.author}</p>
          <button class="remove btn" id=${i}>Remove</button>
        </div>`;
    });
  };

  addBook = (e) => {
    e.preventDefault();
    const newBook = {
      title: title.value,
      author: author.value,
    };
    this.books.push(newBook);
    this.clear();
    this.setLocalStorage(this.books);
    this.displayBooks();
  };

  removeBook = (i) => {
    const filteredBooks = this.books.filter((book) => book !== this.books[i]);
    this.setLocalStorage(filteredBooks);
    this.displayBooks();
  };

  clear = () => {
    title.value = '';
    author.value = '';
  };
}

const book = new Books();

document.addEventListener('DOMContentLoaded', () => {
  book.displayBooks();
});

submit.addEventListener('click', book.addBook);

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = +e.target.getAttribute('id');
    book.removeBook(targetId);
  }
});

dateTime.innerText = new Date();
