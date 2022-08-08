export const setLocalStorage = (newBooks) =>
  localStorage.setItem('books', JSON.stringify(newBooks));

export const getFromLocalStorage = () => {
  this.books = JSON.parse(localStorage.getItem('books')) ?? [];
};
