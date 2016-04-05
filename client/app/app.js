angular.module('myProjects', [
  'myProjects.overview',
  'myProjects.project',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/overview', {
      templateUrl: 'app/overview/overview.html',
      controller: 'overviewController'
    }).
    when('/project', { // TODO: add :projetID
      templateUrl: 'app/project/project.html',
      controller: 'projectController'
    }).
    when('/task', {
      templateUrl: 'app/task/task.html',
      // controller: 'taskController'
    }).
    when('/note', {
      templateUrl: 'app/note/note.html',
      // controller: 'noteController' 
    }).
    otherwise({
      redirectTo: '/overview'
    });
}]);