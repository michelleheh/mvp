angular.module('myProjects.overview', [])
  .controller('overviewController', ['$scope', 'Projects', function($scope, Projects) {

    $scope.projects = data.projects; // TODO setup request to server
    //default values in form
    $scope.project = {
      projectName: "New Project Here",
      startTime: new Date(),
      endTime: new Date()
    };

    $scope.addNewProject = function() {

      var newProject = {
        task: $scope.project.projectName,
        description: $scope.project.projectName + " ",
        startTime: convert(JSON.stringify($scope.project.startTime)),
        endTime: convert(JSON.stringify($scope.project.endTime)),
        details: ""
      };

      // update Gannt chart
      data.projects.unshift(newProject);
      $scope.project = {};
      $("div.svg").children().remove();
      makeGanttChart('Projects Overview', data.projects);

      // post to server
      console.log(JSON.stringify(newProject));
      Projects.addNewProject(JSON.stringify(newProject));

    };

    $scope.setCurrentProject = function(projectName) {
      window.localStorage.currentProject = projectName; // TODO: change to express-session
    };

    // var inputTime = "2016-04-13T07:00:00.000Z";

    var convert = function(inputTime) {
      var outputTime = inputTime.replace("T", " ");
      outputTime = outputTime.replace(":00.000Z", "");
      outputTime = outputTime.slice(1,17);
      return outputTime;
    };

    // initiate with a Gantt Chart
    makeGanttChart('Projects Overview', data.projects);

  }]);