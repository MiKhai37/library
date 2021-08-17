export default class Book {
  constructor(author, title, nbPages, read) {
      this.author = author;
      this.title = title;
      this.nbPages = nbPages
      this.read = read;
  }
  info() {
      console.log(this.title, this.author, this.nbPages, this.read)
  }
}