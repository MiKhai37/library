let myLibrary = [];

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

function renderBookCards(containerID, library) {
    const container = document.querySelector('#' + containerID);
    for (let i = 0; i < library.length; i++) {
        div = document.createElement('div');
        div.classList.add('card');
        container.appendChild(div);

        containerCard = document.createElement('div');
        containerCard.classList.add('container');
        div.appendChild(containerCard);

        h4Title = document.createElement('h4');
        h4Title.textContent = library[i].title;
        containerCard.appendChild(h4Title);

        pAuthor = document.createElement('p');
        pAuthor.textContent = library[i].author;
        containerCard.appendChild(pAuthor);

        pPages = document.createElement('p');
        pPages.textContent = library[i].nbPages + " pages";
        containerCard.appendChild(pPages);

        readBtn = document.createElement('button');
        readBtn.classList.add('btn')
        containerCard.appendChild(readBtn);

        readIcon = document.createElement('i');
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

        deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn");
        deleteBtn.style.backgroundColor = "orangered";
        containerCard.appendChild(deleteBtn);

        deleteIcon = document.createElement('i');
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

function toggleRead() {
    
}

addBookToLibrary(myLibrary, 'author 1', 'title 1', 100, true);
addBookToLibrary(myLibrary, 'author 2', 'title 2', 200, false);
addBookToLibrary(myLibrary, 'author 3', 'title 3', 300, false);
addBookToLibrary(myLibrary, 'author 3', 'title 3', 300, false);
addBookToLibrary(myLibrary, 'author 3', 'title 3', 300, false);

renderBookCards('card-container', myLibrary);

const newBtn = document.querySelector('#new-btn');
newBtn.addEventListener('click', () => {
    overlayOn();
  });

const cancelFormBtn = document.querySelector('#cancel-btn-form');
cancelFormBtn.addEventListener('click', () => {
    overlayOff();
});
