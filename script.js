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

function createBookCards(containerID, library) {
    const container = document.querySelector('#' + containerID);
    for (let i = 0; i < library.length; i++) {
        div = document.createElement('div');
        div.classList.add('card');
        container.appendChild(div);

        img = document.createElement('img');
        img.src = '/img_avatar.png';
        img.alt = "Avatar";
        div.appendChild(img);

        containerCard = document.createElement('div');
        containerCard.classList.add('container');
        div.appendChild(containerCard);

        h4Title = document.createElement('h4');
        h4Title.textContent = library[i].title;
        containerCard.appendChild(h4Title);

        pAuthor = document.createElement('p');
        pAuthor.textContent = library[i].author;
        containerCard.appendChild(pAuthor);

        pRead = document.createElement('p');
        if (library[i].read) {
            pRead.textContent = "read";
        } else {
            pRead.textContent = "not read";
        }
        containerCard.appendChild(pRead);
    }

}

addBookToLibrary(myLibrary, 'author1', 'title1', 100, true);
addBookToLibrary(myLibrary, 'author2', 'title2', 200, false);
addBookToLibrary(myLibrary, 'author3', 'title3', 300, false);

createBookCards('card-container', myLibrary);