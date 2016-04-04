angular.module('myProjects', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/overview', {
      templateUrl: 'app/overview/overview.html',
      controller: 'overviewController'
    }).
    when('/projects', { // TODO: add :projetID
      templateUrl: 'app/projects/projects.html',
      controller: 'projectsController'
    }).
    when('/tasks', {
      templateUrl: 'app/tasks/tasks.html',
      controller: 'tasksController'
    }).
    when('/notes', {
      templateUrl: 'app/notes/notes.html',
      controller: 'notesController' 
    }).
    otherwise({
      redirectTo: '/overview'
    });
}]);