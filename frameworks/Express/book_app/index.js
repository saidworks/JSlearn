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

//get 
app.get('/books',(req,res)=>{
    res.json(books);
})

//define port for app to listen on 
app.listen(port, ()=>{console.log(`application listening on port : ${port}`)});


function writeToJson(updated){

    fs.writeFile("books.json",updated,(err)=>{
        if(err) throw err;
        console.log("New data added");
    });
}