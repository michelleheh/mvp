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

// request handllers
app.post('/api/projects', function(req, res) {
  console.log('-------> got a post request to projects');
  res.send('hello world');
});



app.listen(8000, function(req, res) {
  console.log('myProjects app listening on port 8000!');
});

// module.exports = app;