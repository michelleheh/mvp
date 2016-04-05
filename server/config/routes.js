var projectController = require('../projects/projectController.js');

module.exports = function (app, express) {

  app.get('/api/projects', function(req, res) {
    // connnect to database and get all projects
    // responde with all projects

  });

  app.post('/api/projects', function(req, res) {
    console.log('-------> got a post request to projects');
    // connnect to database and post a project
    // respond with OK 200
    res.json({});
  });

};