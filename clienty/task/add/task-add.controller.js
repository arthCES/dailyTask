/*global angular, console*/
(function () {
    'use strict';
    angular
        .module('task')
        .controller('TaskAddCtrlr', TaskAddCtrlr);
    TaskAddCtrlr.$inject = ['$q', '$state', 'task', 'projectService'];
    function TaskAddCtrlr($q, $state, task, projectService) {
        var vm = this,
            newTask = {};
        vm.addNewTask = addNewTask;

        projectService
            .getAllprojects()
            .then(
                function (allprojects) {
                    console.log(allprojects);
                    vm.allProjects = allprojects;
                },
                function (Error) {
                  console.log(Error);  
                }
        );
        function addNewTask() {
            
            newTask = {
                u_id: 'rinz',
                p_id: vm.projectSelected,
                title: vm.title,
                create_date: vm.dateCreated,
                description: vm.description,
                priority: vm.priority,
                dead_line: vm.deadLine,
                end_date: null,
                estimate: vm.estimate,
                status: false
            };
            console.log(newTask);
            task
                .addTask(newTask)
                .then(
                    function (respo) {
                        vm.data = respo;
                        console.log(respo);
                    },
                    function (error) {
                        console.log(error);
                    }
                );
        }
    }
})();