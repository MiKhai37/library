let myLibrary = [];

function Book(author, title, nbPages, read) {
    this.author = author;
    this.title = title;
    this.nbPages = nbPages;
    this.read = read;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function listBook(library) {

}