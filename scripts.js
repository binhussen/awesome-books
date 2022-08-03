/** @format */
/** @format */

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const submit = document.querySelector('#submit');
const container = document.querySelector('.data-container');
const bookList = document.querySelector('.book-list');
const addContainer = document.querySelector('.add-new');
const contactContainer = document.querySelector('.contacts');
const list = document.querySelector('.list');
const addNew = document.querySelector('.add');
const contact = document.querySelector('.contact');
const dateTime = document.querySelector('.date');

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

list.addEventListener('click', () => {
  bookList.classList.remove('hidden');
  addContainer.classList.add('hidden');
  contactContainer.classList.add('hidden');
});
addNew.addEventListener('click', () => {
  bookList.classList.add('hidden');
  addContainer.classList.remove('hidden');
  contactContainer.classList.add('hidden');
});
contact.addEventListener('click', () => {
  bookList.classList.add('hidden');
  addContainer.classList.add('hidden');
  contactContainer.classList.remove('hidden');
});
dateTime.textContent = new Date();
