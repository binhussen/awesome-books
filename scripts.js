/** @format */
/** @format */

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const submit = document.querySelector('#submit');
const container = document.querySelector('.data-container');

class Books {
  books;

  constructor(title, author) {
    // this.title = title;
    // this.author = author;
    this.getFromLocalStorage();
  }

  setLocalStorage = (newBooks) =>
    localStorage.setItem('books', JSON.stringify(newBooks));

  getFromLocalStorage = () => {
    this.books = JSON.parse(localStorage.getItem('books')) ?? [];
  };

  displayBooks = () => {
    container.innerHTML = '';
    this.books.forEach((book, i) => {
      container.innerHTML += `<div class="book">
        <p><strong>${book.title}</strong></p>
        <p><strong>${book.author}</strong></p>
        </div>`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove');
      container.appendChild(removeButton);

      container.innerHTML += '<hr/>';

      const removeBtn = document.querySelector('.remove');
      removeBtn.addEventListener('click', () => {
        // eslint-disable-next-line no-use-before-define
        this.removeBook(i);
      });
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
