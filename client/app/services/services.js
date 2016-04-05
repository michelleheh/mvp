angular.module('myProjects.services', [])
.factory('Projects', function($http) {

  var getTest = function() {
    console.log('fired');
    $http({
      method: 'GET', 
      url: 'http://localhost:3000/'
    }).then(function(res) {
      console.log(res);
    });    
  };

  return {
    getTest: getTest
  };

});