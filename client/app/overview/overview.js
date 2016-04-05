angular.module('myProjects.overview', [])
  .controller('overviewController', ['$scope', function($scope) {

    $scope.projects = data.projects;

    $scope.addNewProject = function() {
      data.projects.unshift($scope.project);
      $scope.project = {};
    };

    $scope.setCurrentProject = function(projectName) {
      window.localStorage.currentProject = projectName; // TODO: change to express-session
    };

    makeGanttChart('Projects Overview', data.projects);

  }]);