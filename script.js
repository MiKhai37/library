class Book {
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

class Library{
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

function render(containerID, library) {
    const container = document.querySelector('#' + containerID);
    // Wipe out the container
    container.innerHTML = "";
    // Render all book in library, card style
    for (let i = 0; i < library.books.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `<h4>${library.books[i].title}</h4>
                          <p>${library.books[i].author}</p>
                          <p>${library.books[i].nbPages} pages</p>`;
        container.appendChild(card);

        const readBtn = document.createElement('button')
        readBtn.classList.add('btn');
        readBtn.innerHTML = (library.books[i].read) ? '<i class="fa fa-check icon"></i>' : '<i class="fa fa-times icon"></i>'
        readBtn.style.backgroundColor = (library.books[i].read) ? 'green':'red';
        readBtn.addEventListener('click', () => {
            library.books[i].read = !library.books[i].read
            if (library.books[i].read) {
                readBtn.innerHTML = '<i class="fa fa-check icon"></i>'
                readBtn.style.backgroundColor = 'green';
            } else {
                readBtn.innerHTML = '<i class="fa fa-times icon"></i>'
                readBtn.style.backgroundColor = 'red';
            };
        });
        card.appendChild(readBtn);

        const delBtn = document.createElement('button');
        delBtn.classList.add('btn');
        delBtn.innerHTML = '<i class="fa fa-trash icon"></i>';
        delBtn.style.backgroundColor = 'orangered'
        delBtn.addEventListener('click', delCard)
        card.appendChild(delBtn);
    }
}



function delCard() {
    const id = this.dataset.id;
    myLibrary.delBook(id)
    render('card-container', myLibrary)
}

//Functions to display or not the form overlay
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}
  
function overlayOff() {
    document.getElementById("overlay").style.display = "none";
} 

let myLibrary = new Library()

myLibrary.addBook('author1', 'title1', '200', true)
myLibrary.addBook('author2', 'title2', '300', false)
myLibrary.addBook('author3', 'title3', '400', false)

render('card-container', myLibrary);

const newBtn = document.querySelector('#new-btn');
newBtn.addEventListener('click', () => {
    overlayOn();
  });

const cancelFormBtn = document.querySelector('#cancel-btn-form');
cancelFormBtn.addEventListener('click', () => {
    overlayOff();
});

const addBookBtn = document.querySelector('#add-btn-form')
addBookBtn.addEventListener('click', () => {
    // Retrieve the info from the form
    const title = document.querySelector("#form-title").value;
    const author = document.querySelector("#form-author").value;
    const pages = document.querySelector("#form-pages").value;
    // Use library method to add the new book
    myLibrary.addBook(author, title, pages, false);
    render('card-container', myLibrary);
    overlayOff();
})
