angular.module('myProjects.overview', [])
  .controller('overviewController', ['$scope', function($scope) {
    $scope.projects = data.projects;

    $scope.addNewProject = function() {
      data.projects.unshift($scope.project);
      $scope.project = {};
    };
  }]);