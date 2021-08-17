export default class Library{
  constructor() {
      this.array = [];
  }
  get length() {
      return this.array.length
  }
  get books() {
      return this.array
  }
  addBook(author, title, nbPages, read) {
      this.array.push(new Book(author, title, nbPages, read));
  }
  delBook(index) {
      this.array.splice(index,1);
  }

}