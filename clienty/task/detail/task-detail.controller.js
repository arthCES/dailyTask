/*global angular, console*/
(function () {
    'use strict';
    angular
        .module('task')
        .controller('TaskDetailCtrlr', TaskDetailCtrlr);
    TaskDetailCtrlr.$inject = ['$q', '$state', '$stateParams', 'task', 'projectService'];
    function TaskDetailCtrlr($q, $state, $stateParams, task, projectService) {
        var vm = this;
        vm.statusChanged = statusChanged;
        task
            .getTaskById($stateParams.taskId)
            .then(
                function (respo) {
                    vm.data = respo;
                    vm.selected = respo.status;
                    console.log(respo);
                    projectService
                        .getProjectById(respo.p_id)
                        .then(
                            function (project_name) {
                                console.log(project_name);
                            },
                            function (Error) {
                                console.log(Error);
                            }
                    );
                },
                function (error) {
                    console.log(error);
                }
            );
        function statusChanged() {
            console.log(vm.selected);
            task
                .updateStatus(vm.data._id,vm.selected)
                .then(
                    function (result) {
                        console.log(result);
                    },
                    function (Error) {
                        console.log(Error);
                    }
            );
        }
    }
})();