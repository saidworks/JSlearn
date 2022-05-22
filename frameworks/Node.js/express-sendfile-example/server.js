const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const api = require("./openai");




app.use(express.urlencoded({
  extended: true
}))

app.use(express.static(__dirname + '/public'));

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.post('/', function(req,res,next){
  console.log(api.getResponse(req,res));

  res.send(JSON.stringify(req.body.prompt));
})

app.listen(port);
console.log('Server started at http://localhost:' + port);


