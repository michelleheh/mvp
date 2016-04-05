angular.module('myProjects.services', [])
.factory('Projects', function($http) {

  var getAllProjects = function() {
    console.log('fired');
    $http({
      method: 'GET', 
      url: '/api/projects'
    }).then(function(res) {
      console.log(res);
    });    
  };

  return {
    getTest: getTest
  };

});