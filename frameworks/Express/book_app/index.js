const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//where we will keep the books
//read and instantiate object from json file
const fs = require('fs');
var data = fs.readFileSync("books.json");
var books = JSON.parse(data);


const app = express();
const port = 3000;



app.use(cors());

//configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//add
app.post('/book', (req,res)=>{
    let book = req.body;
    // solve empty object pb
    book = JSON.parse(JSON.stringify(book));
    console.log(book);

    books.push(book);
    let newBooks = JSON.stringify(books);
    writeToJson(newBooks);

    res.send('Book is added to the database');
});

//get all books
app.get('/books',(req,res)=>{
    res.json(books);
})
// get one specific book by isbn
app.get('/book/:isbn',(req,res)=>{
    const isbn = req.params.isbn;

    for(let book of books){
        if(book.isbn === isbn){
            res.json(book);
            return;
        }
    }
    res.status(404).send("Book not found");
});

//delete a book
app.delete('/book/:isbn', (req,res)=> {
    //reading isbn from an URL 
    const isbn = req.params.isbn;

    //Remove item from the books array
    books = books.filter(i =>{
        if(i.isbn !== isbn){
            return true;
        }
        return false;
    })
    res.send('Book is deleted');
})

//edit specific book info
app.put('/book/:isbn', (req,res) => {
    // Reading isbn from the URL 
    const isbn = req.params.isbn;
    const newBook = req.body;

    // update book info
    for(let i = 0; i < books.length ; i++){
        let book = books[i];
        if(book.isbn === isbn){
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
})


//define port for app to listen on 
app.listen(port, ()=>{console.log(`application listening on port : ${port}`)});


function writeToJson(updated){

    fs.writeFile("books.json",updated,(err)=>{
        if(err) throw err;
        console.log("New data added");
    });
}