let myLibrary = [{"author": "author 1", "title": "title 1", "nbPages": 100, "read": true},
                 {"author": "author 2", "title": "title 2", "nbPages": 200, "read": false},
                 {"author": "author 3", "title": "title 3", "nbPages": 400, "read": true},
                 {"author": "author 4", "title": "title 4", "nbPages": 100, "read": false}];

function Book(author, title, nbPages, read) {
    this.author = author;
    this.title = title;
    this.nbPages = nbPages;
    this.read = read;
    this.info = function() {
        if (read) {
            return title + " by " + author + ", " + nbPages + "pages, read";
        } else {
            return title + " by " + author + ", " + nbPages + "pages, not read";
        }
    }
}

function addBookToLibrary(library, author, title, nbPages, read) {
    library.push(new Book(author, title, nbPages, read));
}

function removeBookToLibrary(library, cardID) {
    const book = document.getElementById(cardID)
    library.pop(cardID)
}

function renderBookCards(containerID, library) {
    const container = document.querySelector('#' + containerID);
    for (let i = 0; i < library.length; i++) {

        //If the card already exists don't render them
        if (document.getElementById(`card_${i}`)) continue;

        const div = document.createElement('div');
        div.classList.add('card');
        div.id = `card_${i}`
        container.appendChild(div);

        const containerCard = document.createElement('div');
        containerCard.classList.add('container');
        div.appendChild(containerCard);

        const h4Title = document.createElement('h4');
        h4Title.textContent = library[i].title;
        containerCard.appendChild(h4Title);

        const pAuthor = document.createElement('p');
        pAuthor.textContent = library[i].author;
        containerCard.appendChild(pAuthor);

        const pPages = document.createElement('p');
        pPages.textContent = library[i].nbPages + " pages";
        containerCard.appendChild(pPages);

        const readBtn = document.createElement('button');
        readBtn.classList.add('btn')
        containerCard.appendChild(readBtn);

        const readIcon = document.createElement('i');
        readIcon.classList.add("fa");
        if (library[i].read) {
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
            library[i].read = !library[i].read
            if (library[i].read) {
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
        deleteBtn.style.backgroundColor = "orangered";
        containerCard.appendChild(deleteBtn);

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add("fa");
        deleteIcon.classList.add("fa-trash");
        deleteIcon.classList.add("icon");
        deleteIcon.style.backgroundColor = "orangered"
        deleteBtn.appendChild(deleteIcon);
    }

}

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}
  
function overlayOff() {
    document.getElementById("overlay").style.display = "none";
} 

renderBookCards('card-container', myLibrary);

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
    const title = document.querySelector("#form-title").value;
    const author = document.querySelector("#form-author").value;
    const pages = document.querySelector("#form-pages").value;
    console.log('add');
    addBookToLibrary(myLibrary, author, title, pages, false);
    renderBookCards('card-container', myLibrary);
    overlayOff();
})
