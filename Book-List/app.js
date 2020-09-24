// Class Book
class Book {
  constructor(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
  }
}

//LocalStorage

// Class UI
class UI {
  static getBook() {
    const local = [
      {
        name: 'Book 1',
        author: 'Carlos Bido',
        id: 235
      },
      {
        name: 'Book 2',
        author: 'João Garcia',
        id: 145
      }];

    const UIBooks = document.querySelector('#table-body');
    let output;
    const books = local;

    console.log(books) //Remove after

    books.forEach((book) => {
      output.innerHTML += `
      <tr>  
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.id}</td>
        <td>delete</td>
      </tr>
      `;
    })

    UIBooks.appendChild(output);
  }

  static addBook() {

  }

  static removeBook() {

  }


}

// Listeners

UI.getBook();