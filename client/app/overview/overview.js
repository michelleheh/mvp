angular.module('myProjects.overview', [])
  .controller('overviewController', ['$scope', 'Projects', function($scope, Projects) {

    $scope.projects = data.projects; // TODO setup request to server
    // $scope.projects = Projects.getAllProjects();

    var init = function() {
      Projects.getAllProjects()
        .then(function(projects) {
          console.log('overviewController is getting response: ', projects.data);
          console.log('working', $scope.projects);
          $scope.projects = projects.data;
          makeGanttChart('Projects Overview', $scope.projects, ["#9900FF", "#6600FF"], "#/project");
        });
    };

    init();

    //default values in form
    $scope.project = {
      projectName: "Build a Rocking Chair",
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
      // $scope.project = {};
      // $scope.projects.unshift(newProject);
      // makeGanttChart('Projects Overview', $scope.projects, ["#9900FF", "#6600FF"], "#/project");

      // post to server
      Projects.addNewProject(JSON.stringify(newProject));
      $("div.svg").children().remove();
      init();

    };

    var convert = function(inputTime) {
      var outputTime = inputTime.replace("T", " ");
      outputTime = outputTime.replace(":00.000Z", "");
      outputTime = outputTime.slice(1,17);
      return outputTime;
    };

    // // initiate with a Gantt Chart
    // makeGanttChart('Projects Overview', data.projects, ["#9900FF", "#6600FF"], "#/project");

  }]);