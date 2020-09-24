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
    console.log(books) //Remove after the code have been ok

    books.forEach((book) => UI.addBooktoList(book));
  }

  static addBooktoList(book) {
    const UI_tableBody = document.querySelector('#table-body');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.id}</td>
      <td><a href="#" class="btn btn-warning btn-sm delete"> X </a></td>`;

    console.log(row)

    console.log(UI_tableBody);
    UI_tableBody.appendChild(row);
  }

}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Remove Book

// Event: Add Book
