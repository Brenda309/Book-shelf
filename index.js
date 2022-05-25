// Book Object
const Book = {
  title: '',
  author: '',
};
// Books Collection
let Books = [];
if (localStorage.Books) {
  Books = JSON.parse(localStorage.Books);
}

// populate local storage collection with user entries
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const bookTitle = document.getElementById('title');
  const author = document.getElementById('author');
  if (!bookTitle.value || !author.value) {
    alert('Enter both book title and author please');
  } else {
    const book = Object.create(Book);
    book.title = bookTitle.value;
    book.author = author.value;
    Books.push(book);
    bookTitle.value = '';
    author.value = '';
    const stringData = JSON.stringify(Books);
    localStorage.setItem('Books', stringData);
    window.location.reload();
  }
});

// Display localStorage Books Collection entries
if (localStorage.Books) {
  for (let i = 0; i < JSON.parse(localStorage.Books).length; i += 1) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.id = `${i}`;
    li.style.listStyle = 'none';
    const addTitle = document.createElement('p');
    addTitle.innerHTML = JSON.parse(localStorage.Books)[i].title;
    li.appendChild(addTitle);
    const addAuthor = document.createElement('p');
    addAuthor.innerHTML = JSON.parse(localStorage.Books)[i].author;
    li.appendChild(addAuthor);
    const rmvButton = document.createElement('button');
    rmvButton.innerHTML = 'Remove';
    rmvButton.id = `btn${i}`;
    rmvButton.className = 'rmv';
    li.appendChild(rmvButton);
    const hr = document.createElement('hr');
    li.appendChild(hr);
    ul.appendChild(li);
  }
}

// Remove books from collection and display
for (let i = 0; i < document.getElementsByClassName('rmv').length; i += 1) {
  const rmvButton = document.getElementById(`btn${i}`);
  const titleName = Books[i].title;
  const list = document.getElementById(`${i}`);
  rmvButton.addEventListener('click', () => {
    const filtered = Books.filter((Books) => Books.title !== titleName);
    const stringData = JSON.stringify(filtered);
    localStorage.setItem('Books', stringData);
    list.remove();
    window.location.reload();
  });
}