//DOM elements
const bookList= document.getElementById("book-list")
const form = document.getElementById("book-form");
const addBtn= document.getElementById("btn");

let bookData ={
    title: "",
    author: ""

}
let books= JSON.parse(localStorage.getItem("books"))|| [];
// preserved data in the browser's memory by using localStorage.
addBtn.addEventListener ('click', function() {
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
if(!titleInput.value || !authorInput.value){
    alert ("Please add book title and book author")
}
else {
    const newBook= Object.create(bookData);
    newBook.title = titleInput.value;
    newBook.author = authorInput.value;
    books.push(newBook);
    titleInput.value ="";
    authorInput.value="";
    localStorage.setItem("books", JSON.stringify(books));
    window.location.reload();
};
})
if(localStorage.books){
for( let i = 0; JSON.parse(localStorage.books).length; i += 1){
    const bookDiv = document.createElement("div");
    bookDiv.id= `${i}`;
    const bookTitle= document.createElement("h3");
    const bookAuthor = document.createElement("h3");
    const removeBtn= document.createElement("button")
    removeBtn.className = "rmv";
    const horizontalLine= document.createElement("hr")

    bookTitle.innerText = "Book title:" + title;
    bookAuthor.innerText = "Author name:" + author;
    removeBtn.innerText= "remove"
bookDiv.append(bookTitle,bookAuthor, removeBtn,horizontalLine);
bookList.appendChild(bookDiv);
}
}
//a function to display a new book to the collection 
