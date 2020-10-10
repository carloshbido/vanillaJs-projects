//CLASS BOOK
class Book {
  constructor(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
  }
}

//CLASS LOCALSTORAGE
class Storage {

  static getBooks() {

    let books;

    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {

    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const books = Storage.getBooks();

    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    })

    localStorage.setItem('books', JSON.stringify(books));
  }

}

// CLASS UI
class UI {

  static displayBooks() {

    const books = Storage.getBooks();
    books.forEach((book) => UI.addBooktoList(book));
  }

  static addBooktoList(book) {

    const UI_tableBody = document.querySelector('#table-body');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.id}</td>
      <td><a href="#" class="btn btn-warning btn-sm delete"> X </a></td>
      `;

    UI_tableBody.appendChild(row);
  }

  static deleteBooktoList(element) {

    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }

  }

  static alertMessage(msg, type) {
    //Created alert div
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = msg;

    // get html elemets to append
    const card = document.querySelector('.form');
    const form = document.querySelector('#book-form');

    //show message for users
    card.insertBefore(div, form);

    //Vanish message in 2,5 sec
    setTimeout(() => document.querySelector('.alert').remove(), 2500);
  }

  static clearFileds() {
    document.querySelector('#name').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#id').value = '';
  }



}

// EVENT: DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// EVENT: ADD BOOK
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form´s data
  const name = document.querySelector('#name').value;
  const author = document.querySelector('#author').value;
  const id = document.querySelector('#id').value;

  if (name == '' || author == '' || id == '') {

    alertMessage('Não deixe nenhum campo em branco', 'danger');

  } else {

    //Instantiate a book
    const book = new Book(name, author, id);

    // Add in the UI List
    UI.addBooktoList(book);

    //Add book to Storage
    Storage.addBook(book);

    //Show success message
    UI.alertMessage('Livro adicionado com sucesso', 'success');

    // Clear Form´s fields
    UI.clearFileds();
  }
});

// EVENT: REMOVE BOOK
document.querySelector('#table-body').addEventListener('click', (e) => {

  e.preventDefault();

  //remove book from UI
  UI.deleteBooktoList(e.target);

  //Remove book to Storage
  Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Message with book´s id
  const id = e.target.parentElement.previousElementSibling.textContent;
  UI.alertMessage(`Livro ID: ${id} deletado com sucesso`, 'success');
})






