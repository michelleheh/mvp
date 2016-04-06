var projectController = require('../projects/projectController.js');

module.exports = function (app, express) {

  app.get('/api/projects', projectController.getAllProjects);
  app.post('/api/projects', projectController.addProject);

};