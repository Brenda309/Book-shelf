class Books {/* eslint-disable-line max-classes-per-file */
  constructor() {
    this.array = [];
  }
}

class Book {/* eslint-disable-line max-classes-per-file */
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
const booksTitle = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('addBtn');
const storage = new Books();

if (localStorage.Books) {
  storage.array = JSON.parse(localStorage.Books);
}

addBtn.addEventListener('click', () => {
  if (!booksTitle.value || !author.value) {
    alert('Enter both title books and author');
  } else {
    const book = new Book(booksTitle.value, author.value);
    storage.array.push(book);
    book.value = '';
    author.value = '';
    const stringData = JSON.stringify(storage.array);
    localStorage.setItem('Books', stringData);
    window.location.reload();
  }
});

const add = () => {
  if (localStorage.Books) {
    for (let i = 0; i < JSON.parse(localStorage.Books).length; i += 1) {
      const ul = document.getElementById('books');
      const addTitle = document.createElement('p');
      const li = document.createElement('li');
      const addAuthor = document.createElement('p');
      const rmvButton = document.createElement('button');

      ul.className = 'books';

      li.id = `${i}`;
      li.className = 'myBooks';
      li.style.listStyle = 'none';

      addTitle.innerHTML = JSON.parse(localStorage.Books)[i].title;
      addTitle.innerText += ' by ';
      li.appendChild(addTitle);

      addAuthor.innerHTML = JSON.parse(localStorage.Books)[i].author;
      li.appendChild(addAuthor);

      rmvButton.innerHTML = 'Remove';
      rmvButton.id = `btn${i}`;
      rmvButton.className = 'rmv';
      li.appendChild(rmvButton);

      ul.appendChild(li);
    }
  }
};
add();

const remove = () => {
  const rmv = document.getElementsByClassName('rmv');
  for (let i = 0; i < rmv.length; i += 1) {
    const rmvButton = document.getElementById(`btn${i}`);
    const titleName = storage.array[i].title;
    const list = document.getElementById(`${i}`);
    rmvButton.addEventListener('click', () => {
      const filtered = storage.array.filter((Books) => Books.title !== titleName);
      const stringData = JSON.stringify(filtered);
      localStorage.setItem('Books', stringData);
      list.remove();
      window.location.reload();
    });
  }
};
remove();
// Add functionalities to the nav-menu
const list = document.getElementById('list');
const addNew = document.getElementById('new');
const contact = document.getElementById('contact');
const bookListSect = document.getElementById('book-list');
const userInput = document.getElementById('userInput');
const contactSection = document.getElementById('contact-us');

// display constact information
contact.addEventListener('click', () => {
  contactSection.style.display = 'block';
  bookListSect.style.display = 'none';
  userInput.style.display = 'none';
});
// display list of books that were add
list.addEventListener('click', () => {
  bookListSect.style.display = 'block';
  contactSection.style.display = 'none';
  userInput.style.display = 'none';
});
// display input field field for use to add a book
addNew.addEventListener('click', () => {
  userInput.style.display = 'block';
  bookListSect.style.display = 'none';
  contactSection.style.display = 'none';
});
