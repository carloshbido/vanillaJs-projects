// *** Class Book *** 
class Book {
  constructor(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
  }
}

// *** Class Localstorage *** 

// *** Class UI *** 
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

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form´s data
  const name = document.querySelector('#name').value;
  const author = document.querySelector('#author').value;
  const id = document.querySelector('#id').value;

  //Instantiate a book
  const book = new Book(name, author, id);

  // Add in the UI List
  UI.addBooktoList(book);

  // Clear Fields
  UI.clearFileds();
});

// Event: Remove Book



