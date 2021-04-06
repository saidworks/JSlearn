// book constructor 
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Contructor
class UI {
    constructor() {}
        // Add book 
    addBookToList(book) {
            const list = document.getElementById('book-list');
            // create an element
            const row = document.createElement('tr');
            //insert cols
            row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href="#" class="delete">X<a></td>`;

            list.appendChild(row);

        }
        //show alerts
    showAlert(message, className) {
            const div = document.createElement('div');
            div.className = `alert ${className}`;
            //add text
            div.appendChild(document.createTextNode(message));
            //Get parent
            const container = document.querySelector('.container');
            const form = document.querySelector('#book-form');
            //insert Alert
            container.insertBefore(div, form);
            //disappear after 3s
            setTimeout(function() {
                document.querySelector('.alert').remove();
            }, 3000);

        }
        //clear fieldss
    clearFields() {
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('ISBN').value = '';
        }
        // Delete book
    deleteBook(target) {
        if (target.className = 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}


// Event listeners for add book 
document.getElementById('book-form').addEventListener('submit', function(e) {

    // get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('ISBN').value;
    // instantiate book and UI constructor
    const book = new Book(title, author, isbn);
    const ui = new UI();

    //validate 
    if (title === '' || author === '' || ISBN == '') {
        //error alter 
        ui.showAlert('please fill in all fields', 'error');
    } else {
        // ui add book to list
        ui.addBookToList(book);
        //show success message
        ui.showAlert('Book added successfully!', 'success');
        //clear fields after submit
        ui.clearFields();
    }

    e.preventDefault();


});
// event listener for delete 



// one book data
document.querySelector('#book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book successfuly deleted', 'success')
    e.preventDefault();
})
daVinci = {
    title: 'Da Vinci Code ',
    author: 'Dan Brown',
    ISBN: '9780307879257'
}