angular.module('myProjects.project', [])
  .controller('projectController', ['$scope', function($scope) {

    $scope.tasks = data.tasks; // TODO setup request to server

    //default values in form
    var defaultTask = {
      taskName: "gather song list",
      description: "gather song list",
      startTime: new Date(),
      endTime: new Date()
    };

    $scope.task = defaultTask;


    $scope.addNewTask = function() {

      var newTask = {
        task: $scope.task.taskName,
        description: $scope.task.taskName + " ",
        startTime: convert(JSON.stringify($scope.task.startTime)),
        endTime: convert(JSON.stringify($scope.task.endTime)),
        details: ""
      };

      // update Gannt chart
      data.tasks.unshift(newTask);
      $scope.task = defaultTask;
      $("div.svg").children().remove();
      makeGanttChart('Tasks Overview', data.tasks, ["#F95002", "#00B9FA"], "#/task");

      // post to server
      // Tasks.addNewProject(JSON.stringify(newProject));

    };

    var convert = function(inputTime) {
      var outputTime = inputTime.replace("T", " ");
      outputTime = outputTime.replace(":00.000Z", "");
      outputTime = outputTime.slice(1,17);
      return outputTime;
    };
    // initiate with a Gantt Chart
    makeGanttChart('Tasks Overview', data.tasks, ["#F95002", "#00B9FA"], "#/task");

  }]);