class UI{
    constructor(){
        /*this.title = document.getElementById("title")
        this.author = document.getElementById("authorName")
        this.isbn = document.getElementById("isbn#")*/
        this.table = document.querySelector("#bookTable")
    }
    addBook(Book){
        const row = this.table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        cell1.innerHTML = Book.title
        cell2.innerHTML = Book.author
        cell3.innerHTML = Book.isbn
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken-2 secondary-content'
        a.setAttribute('href', '#')
        a.id = Book.id
        cell4.appendChild(a)
        this.table.appe
    }
    deleteBook(e){
        if(confirm('Do you realy want to delete this book?')) {
            if(e.target.parentElement.parentElement.rowIndex > 0){
                table.deleteRow(e.target.parentElement.parentElement.rowIndex)
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
    getBook(e){
        let id = e.target.id
        return id
    }
    deleteAllBook(){
        if (confirm("are you sure you want to remove all books?")) {
            while(table.firstElementChild.childElementCount > 1){
                table.deleteRow(1)
            }
            return true
        }else{
            return false
        }
    }
}