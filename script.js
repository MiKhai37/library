class library{
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

class Book {
    constructor(author, title, nbPages, read) {
        this.author = author;
        this.title = title;
        this.nbPages = nbPages;
        this.read = read;
    }
}

function render(containerID, library) {
    const container = document.querySelector('#' + containerID);
    // Wipe Out the container
    container.innerHTML = ""
    console.log(library.length)
    // Render all book in library, card style
    for (let i = 0; i < library.books.length; i++) {
        console.log("add" + i)
        const div = document.createElement('div');
        div.classList.add('card');
        div.id = `card_${i}`;
        div.dataset.id = i;
        container.appendChild(div);

        const containerCard = document.createElement('div');
        containerCard.classList.add('container');
        div.appendChild(containerCard);

        const h4Title = document.createElement('h4');
        h4Title.textContent = library.books[i].title;
        containerCard.appendChild(h4Title);

        const pAuthor = document.createElement('p');
        pAuthor.textContent = library.books[i].author;
        containerCard.appendChild(pAuthor);

        const pPages = document.createElement('p');
        pPages.textContent = library.books[i].nbPages + " pages";
        containerCard.appendChild(pPages);

        const readBtn = document.createElement('button');
        readBtn.classList.add('btn')
        containerCard.appendChild(readBtn);

        const readIcon = document.createElement('i');
        readIcon.classList.add("fa");
        if (library.books[i].read) {
            readIcon.classList.add("fa-check");
            readIcon.style.backgroundColor = "green"
            readBtn.style.backgroundColor = "green"
        } else {
            readIcon.classList.add("fa-times");
            readIcon.style.backgroundColor = "orangered"
            readBtn.style.backgroundColor = "orangered"
        }
        readIcon.classList.add("icon");
        readBtn.appendChild(readIcon);
        readBtn.addEventListener('click', () => {
            library.books[i].read = !library.books[i].read
            if (library.books[i].read) {
                readIcon.classList.remove("fa-times");
                readIcon.classList.add("fa-check");
                readIcon.style.backgroundColor = "green"
                readBtn.style.backgroundColor = "green"
            } else {
                readIcon.classList.remove("fa-check");
                readIcon.classList.add("fa-times");
                readIcon.style.backgroundColor = "orangered"
                readBtn.style.backgroundColor = "orangered"
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn");
        deleteBtn.dataset.id = i;
        deleteBtn.style.backgroundColor = "orangered";
        containerCard.appendChild(deleteBtn);

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add("fa");
        deleteIcon.classList.add("fa-trash");
        deleteIcon.classList.add("icon");
        deleteIcon.style.backgroundColor = "orangered"
        deleteBtn.appendChild(deleteIcon);

        deleteBtn.addEventListener('click', delCard)
    }

}

function delCard() {
    const id = this.dataset.id;
    console.log(this.dataset.id);
    
    const container = document.querySelector('#card-container');
    const div = document.querySelector(`#card_${id}`);
    myLibrary.delBook(id)
    container.removeChild(div);
}

//Functions to display or not the form overlay
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}
  
function overlayOff() {
    document.getElementById("overlay").style.display = "none";
} 

let myLibrary = new library()

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
