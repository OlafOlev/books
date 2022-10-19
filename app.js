const titleInput = document.getElementById("title")
const authorInput = document.getElementById("authorName")
const isbnInput = document.getElementById("isbn#")
const table = document.querySelector("#bookTable")
const form = document.querySelector('form')
const table_title_row = document.querySelector('#table_title_row')

form.addEventListener("submit", addBook)
table.addEventListener('click', deleteBook)
table.addEventListener('click', deleteAllBook)



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
    e.preventDefault()
}

function deleteBook(e){
    let listBook
    if (e.target.textContent === "X") {
        if (confirm("are you sure you want to remove this book?")) {
            listBook = e.target.parentElement.parentElement.rowIndex
            console.log(listBook)
                if (e.target.parentElement.parentElement.rowIndex > 0) {
                    table.deleteRow(listBook)
                }
        }
    }
}
function deleteAllBook(e){
    if (e.target.id == "Delete all") {
        if (confirm("are you sure you want to remove all books?")) {
            while(table.firstElementChild.childElementCount > 1){
                table.deleteRow(1)}
        }
    }
}
