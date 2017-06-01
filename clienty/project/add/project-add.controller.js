/*global angular, console*/
(function () {
    'use strict';
    angular
        .module('project')
        .controller('ProjectAddCtrlr', ProjectAddCtrlr);
    ProjectAddCtrlr.$inject = ['$q', '$state', 'projectService'];
    function ProjectAddCtrlr($q, $state, projectService) {
        var vm = this,
            newProject = {};
        vm.addNewProject = addNewProject;
        
        
        function addNewProject() {
           console.log("ting");
             newProject = {
                 project_name: vm.title
            };
            projectService
                .addProject(newProject)
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