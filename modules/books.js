import { setLocalStorage, getFromLocalStorage } from './local_storage.js';
import { title, author } from './selector.js';
import { displayBooks } from './display.js';

export default class Books {
  books;

  constructor() {
    this.books = getFromLocalStorage();
  }

  addBook = (e) => {
    e.preventDefault();
    const newBook = {
      title: title.value,
      author: author.value,
    };
    this.books.push(newBook);
    this.clear();
    setLocalStorage(this.books);
    displayBooks();
  };

  removeBook = (i) => {
    this.books = getFromLocalStorage();
    const filteredBooks = this.books.filter((book) => book !== this.books[i]);
    setLocalStorage(filteredBooks);
    displayBooks();
  };

  clear = () => {
    title.value = '';
    author.value = '';
  };
}
