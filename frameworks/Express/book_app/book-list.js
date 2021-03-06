const setEditModal = (isbn) => {
    // Get information about the book using isbn
    const xhttp = new XMLHttpRequest();
    console.log(xhttp);
    xhttp.open("GET",`http://localhost:3000/book/${isbn}`,false);
    xhttp.send();

    const book = JSON.parse(xhttp.responseText);
    console.log(book);
    const {title,subtitle,author,published,publisher,pages,description,website} = book;
    console.log(title,isbn);
    //filling information about the book in the form inside the modal;
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('title').value = title;
    document.getElementById('subtitle').value = subtitle;
    document.getElementById('author').value = author;
    document.getElementById('publisher').value = publisher;
    document.getElementById('published').value = published;
    document.getElementById('pages').value = pages;
    document.getElementById('description').value = description;
    document.getElementById('website').value = website;

    document.getElementById('editForm').action = `http://localhost:3000/book/${isbn}`;
    document.getElementById('editForm').method = "PUT";
    console.log(document.getElementById('editForm'));
}

const deleteBook = (isbn) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open('DELETE',`http://localhost:3000/book/${isbn}`,false);
    xhttp.send();

    document.getElementById('deleteForm').action = `http://localhost:3000/book/${isbn}`;
    //reload the page after delete
    location.reload();
}


const loadBooks = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET","http://localhost:3000/books",false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);
    
    for(let book of books){
        const x = `
        <div class="col-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>

                <div>Author: ${book.author}</div>
                <div>Publisher: ${book.publisher}</div>
                <div>Number Of Pages: ${book.pages}</div>

                <hr>

                <button type="button" class="btn btn-danger"
                data-target="#deleteBookModal" onClick="deleteBook(${book.isbn})"
                >Delete</button>
                <button types="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                    Edit
                </button>
                </div>
            </div>
        </div> 
                `;
        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
}

loadBooks();

// function editBook(){
//     //setting up the action url for the book 
    
//     // console.log("working");    
//     // const xhttp = new XMLHttpRequest();
//     // xhttp.open('PUT',`http://localhost:3000/book/${isbn}`,false);
//     // xhttp.send();

//     document.getElementById('editForm').action = `http://localhost:3000/book/${isbn}`;
//     document.getElementById('editForm').method = "PUT";
//     console.log(document.getElementById('editForm'));
// }