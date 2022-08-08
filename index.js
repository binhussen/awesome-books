import Books from './modules/books';
import displayBooks from './modules/display';
import { container, submit } from './modules/selector';

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
