class LS{
    getBook(key){
        let books
        if (localStorage.getItem(key === null)){
            books = []
            return books
        } else {
            books = JSON.parse(localStorage.getItem(key))
        }
        return books
    }
    setBook(key, books){
        localStorage.setItem(key, JSON.stringify(books))
    }
    deleteAllBook(){
        let books
        books = []
        this.setBook('books', books)
    }
    addBook(book){
        let books
        if (localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        books.push(book)
        localStorage.setItem("books", JSON.stringify(books))
    }
    deleteBook(bookID){
        const books = this.getBook('books')
        books.forEach(function(bookLS, bookIndex){
            if(bookLS.id == bookID){
                books.splice(bookIndex, 1)
            }
        })
        this.setBook('books', books)
    }
}