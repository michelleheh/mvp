angular.module('myProjects.project', [])
  .controller('projectController', ['$scope', function($scope) {

    $scope.currentProject = window.localStorage.currentProject; //TODO: change to express session
    $scope.tasks = data.tasks;

    $scope.addNewTask = function() {
      data.tasks.unshift($scope.project);
      $scope.tasks = {};
    };

    $scope.setCurrentTask = function(taskName) {
      window.localStorage.currentTask = taskName; // TODO: change to express-session
    };

  }]);