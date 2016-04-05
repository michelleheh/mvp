angular.module('myProjects.services', [])
.factory('Projects', function($http) {

  var getAllProjects = function() {
    $http({
      method: 'GET', 
      url: '/api/projects'
    }).then(function(res) {
      console.log('getAllProjects response: ', res);
    });    
  };

  var addNewProject = function(newProject) {
    $http({
      method: 'POST',
      url: '/api/projects',
      data: newProject
    }).then(function(res) {
      console.log('addNewProject got response back', res);
    });
  };

  return {
    getAllProjects: getAllProjects,
    addNewProject: addNewProject
  };

});