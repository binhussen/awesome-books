/** @format */
/** @format */

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const submit = document.querySelector('#submit');
const container = document.querySelector('.data-container');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
