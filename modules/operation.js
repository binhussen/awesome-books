export const addBook = () => {
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

export const removeBook = (i) => {
  const filteredBooks = this.books.filter((book) => book !== this.books[i]);
  this.setLocalStorage(filteredBooks);
  this.displayBooks();
};

export const clear = () => {
  title.value = '';
  author.value = '';
};
