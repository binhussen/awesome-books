export const displayBooks = () => {
  this.getFromLocalStorage();
  container.innerHTML = '';
  this.books.forEach((book, i) => {
    container.innerHTML += `<div class="book">
          <p><q>${book.title}</q> by ${book.author}</p>
          <button class="remove btn" id=${i}>Remove</button>
        </div>`;
  });
};
