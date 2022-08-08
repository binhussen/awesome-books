import Books from './modules/books.js';
import { displayBooks } from './modules/display.js';
import { luxon } from './modules/luxon.js';
import {
  addContainer,
  addNew,
  bookList,
  contact,
  contactContainer,
  container,
  list,
  submit,
  dateTime,
} from './modules/selector.js';

const book = new Books();

document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
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

const setTime = () => {
  dateTime.innerHTML = luxon.DateTime.now().toLocaleString(
    luxon.DateTime.DATETIME_MED_WITH_SECONDS,
  );
  setTimeout(setTime, 1000);
};

setTime();
