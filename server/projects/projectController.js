var Q = require('q');
var Project = require('./projectModel.js');

module.exports = {
  getAllProjects: function (req, res) {
    // TODO: query db
  },

  addProject: function (req, res) {

    var newProject = {
      "task": "Band Practice2",
      "description": "Band Practice",
      "startTime": "2016-4-10 8:24",
      "endTime": "2016-4-12 18:24",
      "details": ""
    };

    console.log('this is req.body', req.body);

    Project.create(req.body, function(err, dbRes) {
      if(err) {
        res.send('there is an err: ');
      } else {
        res.send(dbRes);
      }
    });

  }

};