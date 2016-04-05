var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/myProjects');


//serving a static folder
app.use(express.static(path.join(__dirname, '..', 'client')));

// configure server with middleware and routes
// require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(8000, function(req, res) {
  console.log('myProjects app listening on port 8000!');
  console.log(path.join(__dirname, '..', 'client'));
});

// module.exports = app;