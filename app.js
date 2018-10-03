const express = require('express');
var app = express();
const path = require('path');

//app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(req, res){
  console.log('Listening on port 3000')
});
