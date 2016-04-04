angular.module('myProjects.overview', [])
  .controller('overviewController', ['$scope', function($scope) {
    $scope.projects = data.projects;
  }]);