var Q = require('q');
var Project = require('./projectModel.js');

// Promisify a few mongoose methods with the `q` promise library
// var findLink = Q.nbind(Project.findOne, Project);
// var createProject = Q.nbind(Project.create, Project);
var findAllProjects = Q.nbind(Project.find, Project);

module.exports = {
  getAllProjects: function (req, res) {
    // TODO: query db
    findAllProjects({})
      .then(function(projects) {
        res.json(projects);
      })
      .fail(function(err) {
        next(err);
      });
  },

  addProject: function (req, res) {

    // var newProject = {
    //   "task": "Band Practice2",
    //   "description": "Band Practice",
    //   "startTime": "2016-4-10 8:24",
    //   "endTime": "2016-4-12 18:24",
    //   "details": ""
    // };

    // console.log('this is req.body', req.body);

    Project.create(req.body, function(err, dbRes) {
      if(err) {
        res.send('there is an err: ');
      } else {
        res.send(dbRes);
      }
    });

  }

};