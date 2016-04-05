var express = require('express');
var mongoose = require('mongoose');

var app = express();

// mongoose.connect('mongodb://localhost/myProjects');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function(req, res) {
  console.log('myProjects app listening on port 3000!');
});

// module.exports = app;