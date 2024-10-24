document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    if (title && author) {
        addBookToList(title, author);
        document.getElementById('book-form').reset();
    }
});

function addBookToList(title, author) {
    const bookList = document.getElementById('book-list');
    const li = document.createElement('li');
    li.textContent = `${title} by ${author}`;
    bookList.appendChild(li);
}
