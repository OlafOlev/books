UI = new UI()
LS = new LS()
table = document.querySelector("#bookTable")
form = document.querySelector('form')

form.addEventListener("submit", addBook)
table.addEventListener('click', deleteBook)
document.addEventListener("DOMContentLoaded", getBooks)
function addBook(e){
    titleInput = document.getElementById("title")
    authorInput = document.getElementById("authorName")
    isbnInput = document.getElementById("isbn#")
    id = localStorage.getItem('books').length
    let book = new Book(titleInput.value, authorInput.value, isbnInput.value, id)
    UI.addBook(book)
    LS.addBook(book)
    titleInput.value = ""
    authorInput.value = ""
    isbnInput.value = ""
    e.preventDefault()
}

function deleteBook(event) {
    if (event.target.textContent === 'X') {
        const bookID = UI.getBook(event)
        if (UI.deleteBook(event) === true) {
            LS.deleteBook(bookID)
        }
    }
    if (event.target.id == "Delete all") {
        if (UI.deleteAllBook(event) === true) {
            LS.deleteAllBook()
        }
    }
}

function getBooks() {
    let books = LS.getBook('books')
    if (books !== null) {
        books.forEach(function (booksFromLs) {
            UI.addBook(booksFromLs)
        })
    }
}