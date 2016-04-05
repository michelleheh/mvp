angular.module('myProjects.task', [])
.controller('taskController', ['$scope', function($scope) {

  $scope.notes = data.notes; // TODO setup request to server
  
  //default values in form
  var defaultNote = {
    noteTitle: "Corgis",
    text: "Corgi puppies are the best",
    url: "http://pembroke-welshcorgi.com/uploads/3/4/1/0/34101140/4066212_orig.jpg"
  };

  $scope.note = defaultNote;

  $scope.addNewNote = function() {


    var newNote = {
      noteTitle: $scope.note.noteTitle,
      text: $scope.note.text,
      url: $scope.note.url
    };

  // add note to page
    console.log('adding a new note: ', newNote);
    $scope.notes.unshift(newNote);
    $scope.note = defaultNote;
  // TODO: post to server
  // Notes.addNewNote(JSON.stringify(newNote));

  };

}]);