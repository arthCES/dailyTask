/*global angular, console*/
(function () {
    'use strict';
    angular
        .module('task')
        .controller('TaskDashCtrlr', TaskDashCtrlr);
    TaskDashCtrlr.$inject = ['$q', '$timeout', '$state', 'task', 'projectService', '$mdDialog', 'addCommit'];
    function TaskDashCtrlr($q, $timeout, $state, task, projectService, $mdDialog, addCommit) {
        var vm = this,
            alert,
            test = "Test";

        vm.allTasks = [];
        vm.showAlert = showAlert;
        vm.closeDialog = closeDialog;

        $timeout(function () {
            vm.onDateChange();
        }, 3000);

        function closeDialog(fromTime, toTime) {
   
            $mdDialog.hide();
            console.log(fromTime._i);
            addCommit
                .addCommit(fromTime._i, toTime._i )
                .then(
                    function (response) {
                        console.log("Time commit response" + response);
                    },
                    function (error) {
                        console.log("Time commit error" + error);
                    }
                );
        }
        function showAlert($event, currentTask) {
           /* alert = $mdDialog.alert()
                .title('Attention, ')
                .textContent('This is an example of how easy dialogs can be!')
                .ok('Stamp It!!');*/

            /*$mdDialog
                .show(alert)
                .finally(function () {
                    alert = undefined;
                });
            */
            task.setTask(currentTask);
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: './task/dash/dialog.html',
                controller: function($scope) {
                    $scope.test = "Test";
                },
                onComplete: afterShowAnimation,
                locals: {
                    abc: "abc"
                }
            });
            function afterShowAnimation(scope, element, options) {
           // post-show code here: DOM element focus, etc.
            }
        }

        vm.onDateChange = function (newValue, oldValue) {
            var dateSelected;
            /*console.log(newValue);1
            console.log(newValue._i);*/
            if (!newValue) {
                dateSelected = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
            } else {
                dateSelected = newValue._i;
            }
            console.log(dateSelected);
            task
                .getAllTasks(dateSelected)
                .then(
                    function (allTask) {
                        console.log(allTask);
                        projectService
                            .getAllprojects()
                            .then(
                                function (allProjects) {
                                    console.log(allProjects);
                                    vm.allTasks = task.taskDashJson(allTask, allProjects);
                                    console.log(vm.allTasks);
                                },
                                function (error) {
                                    console.log(error);
                                }
                            );
                    },
                    function (error) {
                        console.log(error);
                    }
                );
        };
    }
})();