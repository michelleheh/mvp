angular.module('myProjects.project', [])
  .controller('projectController', ['$scope', 'Projects', function($scope, Projects) {

    $scope.currentProject = window.localStorage.currentProject; //TODO: change to express session
    $scope.tasks = data.tasks;

    $scope.addNewTask = function() {
      data.tasks.unshift($scope.project);
      $scope.tasks = {};
    };

    $scope.setCurrentTask = function(taskName) {
      window.localStorage.currentTask = taskName; // TODO: change to express-session
    };

    $scope.logIt = function() {
      Projects.getTest();
    };

  }]);