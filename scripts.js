/** @format */
/** @format */

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const submit = document.querySelector("#submit");
const container = document.querySelector(".data-container");

const books = [];

displayBooks = () => {
	container.innerHTML = "";
	books.forEach((book) => {
		container.innerHTML += `<div class="book">
        <p><strong>${book.title}</strong></p>
        <p><strong>${book.author}</strong></p>
        <input type="button" value="Remove" onclick="removeBook(${books.indexOf(
					book
				)})">
        </div>
        <hr/>`;
	});
};

addBook = (e) => {
	e.preventDefault();
	const newBook = {
		title: title.value,
		author: author.value,
	};
	books.push(newBook);
	clear();
	displayBooks(books);
};

removeBook = (i) => {
	books.filter((book) => book !== books[i]);
	displayBooks();
};

clear = () => {
	title.value = "";
	author.value = "";
};

submit.addEventListener("click", addBook);
