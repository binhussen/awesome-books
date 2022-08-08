export const title = document.querySelector('#title');
export const author = document.querySelector('#author');
export const submit = document.querySelector('#submit');
export const container = document.querySelector('.data-container');
export const bookList = document.querySelector('.book-list');
export const addContainer = document.querySelector('.add-new');
export const contactContainer = document.querySelector('.contacts');
export const list = document.querySelector('.list');
export const addNew = document.querySelector('.add');
export const contact = document.querySelector('.contact');
export const dateTime = document.querySelector('.date');

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
