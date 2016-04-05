angular.module('myProjects.task', [])
.controller('taskController', ['$scope', function($scope) {

  $scope.notes = data.notes; // TODO setup request to server
  
  //default values in form
  $scope.note = {
    noteTitle: "New Note Here",
    text: "detailed Notes",
    url: "http://www.safestkitts.org/uploads/1/4/1/0/14108477/s986986427336998704_p5_i2_w347.jpeg"
  };

  $scope.addNewNote = function() {
    console.log('adding a new note');

  //   var newNote = {
  //     noteTitle: $scope.project.noteTitle,
  //     text: $scope.project.text,
  //     url: $scope.project.url
  //   };

    // add note to page

    // post to server
    // Notes.addNewNote(JSON.stringify(newNote));

  };

}]);