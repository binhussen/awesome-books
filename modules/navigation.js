import {
  list,
  addNew,
  contact,
  bookList,
  addContainer,
  contactContainer,
} from './selector.js';

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
