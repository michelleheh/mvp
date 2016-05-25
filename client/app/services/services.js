angular.module('myProjects.services', [])
.factory('Projects', function($http) {

  var getAllProjects = function() {
    // console.log('getAllProjects fired in services');
    return $http({
      method: 'GET', 
      url: '/api/projects'
    }).then(function(res) {
      return res;
    });    
  };

  var addNewProject = function(newProject) {
    $http({
      method: 'POST',
      url: '/api/projects',
      data: newProject
    }).then(function(res) {
      console.log('++> addNewProject got response back: ', res);
    });
  };

  return {
    getAllProjects: getAllProjects,
    addNewProject: addNewProject
  };

});