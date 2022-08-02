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
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        </div>`;
	});
};

addBook = (e) => {
	e.preventDefault();
	const newBook = {
		title: title.value,
		author: author.value,
	};
	books.push(newBook);
	console.log(books);
};

removeBook = (i) => {
	books = books.filter((book) => book !== books[i]);
	console.log(books);
};

submit.addEventListener("click", addBook);
