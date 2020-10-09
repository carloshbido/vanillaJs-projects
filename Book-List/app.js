//CLASS BOOK
class Book {
  constructor(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
  }
}

//CLASS LOCALSTORAGE

// CLASS UI
class UI {

  static displayBooks() {
    const bookListfromStorage = [
      {
        name: 'Book 1',
        author: 'Carlos Bido',
        id: '235'
      },
      {
        name: 'Book 2',
        author: 'João Garcia',
        id: '145'
      }
    ]

    const books = bookListfromStorage;
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

    //Show success message
    alertMessage('Livro adicionado com sucesso', 'success');

    // Clear Form´s fields
    UI.clearFileds();
  }
});

// EVENT: REMOVE BOOK


//FUNCTION TO SHOW ALERTS
function alertMessage(msg, type) {
  //Created alert div
  const div = document.createElement('div');
  div.className = `alert alert-${type}`;
  div.textContent = msg;

  // get html elemets to append
  card = document.querySelector('.form');
  form = document.querySelector('#book-form');

  //show message for users
  card.insertBefore(div, form);

  //Vanish message in 2 sec
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}






