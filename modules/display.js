import getFromLocalStorage from './local_storage.js';
import container from './selector.js';

const books = getFromLocalStorage();

const displayBooks = () => {
  container.innerHTML = '';
  books.forEach((book, i) => {
    container.innerHTML += `<div class="book">
                <p><q>${book.title}</q> by ${book.author}</p>
                <button class="remove btn" id=${i}>Remove</button>
              </div>`;
  });
};

export default displayBooks;
