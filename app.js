const titleInput = document.getElementById("title")
const authorInput = document.getElementById("authorName")
const isbnInput = document.getElementById("isbn#")
const table = document.querySelector("#bookTable")
const form = document.querySelector('form')

form.addEventListener("submit", addBook)
table.addEventListener('click', deleteBook)
table.addEventListener('click', deleteAllBook)
document.addEventListener("DOMContentLoaded", getBooksFromLS)


function addBook(e){
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = titleInput.value
    cell2.innerHTML = authorInput.value
    cell3.innerHTML = isbnInput.value
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    cell4.appendChild(a)
    const toLSData = [titleInput.value, authorInput.value, isbnInput.value]
    addBookLS(toLSData)
    titleInput.value = ""
    authorInput.value = ""
    isbnInput.value = ""
    e.preventDefault()
}

function deleteBook(e){
    let listBook
    let name = e.target.parentElement.parentElement.children[0].innerText
    let author = e.target.parentElement.parentElement.children[1].innerText
    let ISBN = e.target.parentElement.parentElement.children[2].innerText
    let listDeletedBook = [name,author,ISBN]
    if (e.target.textContent === "X") {
        if (confirm("are you sure you want to remove this book?")) {
            listBook = e.target.parentElement.parentElement.rowIndex
                if (e.target.parentElement.parentElement.rowIndex > 0) {
                    console.log(e.target.parentElement.parentElement.rowIndex)
                    table.deleteRow(listBook)
                    deleteBookLS(listBook, listDeletedBook)
                }
        }
    }
}
function deleteAllBook(e){
    if (e.target.id == "Delete all") {
        if (confirm("are you sure you want to remove all books?")) {
            while(table.firstElementChild.childElementCount > 1){
                table.deleteRow(1)}
            deleteAllBookLS()
        }
    }
}
function addBookLS(book){
    let books
    if (localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
}
function getBooksFromLS(){
    let books
    if (localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    books.forEach((book, bookIndex) => {
        let title = book[0]
        let author = book[1]
        let isbn = book[2]
        const row = table.insertRow(bookIndex+1)
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)
        cell1.innerHTML = title
        cell2.innerHTML = author
        cell3.innerHTML = isbn
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken-2 secondary-content'
        a.setAttribute('href', '#')
        cell4.appendChild(a)
    })
}
function deleteBookLS(bookIndex2, book){
    let books
    if (localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    books.forEach((bookLS, bookIndex) => {
        const bookLS2 = JSON.stringify(bookLS)
        const book2 = JSON.stringify(book)
        if(bookLS2 === book2 && bookIndex2-1 == bookIndex){
            books.splice(bookIndex, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}
function deleteAllBookLS() {
    let books
    books = []
    localStorage.setItem('books', JSON.stringify(books))
}