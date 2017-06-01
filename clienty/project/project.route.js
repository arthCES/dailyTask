/*global angular*/
(function () {
    'use strict';
    angular
        .module('project')
        .config(config);
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('project', {
                url: "/project",
                templateUrl: "/project/project-shell.html"
            })
          /*  .state('project.all', {
                url: "/all",
                templateUrl: "/project/all/project-all.view.html",
                controller: "ProjectAllCtrlr as projectCtrl"
            })*/
            .state('project.addnew', {
                url: "/addnew",
                templateUrl: "/project/add/project-add.view.html",
                controller: "ProjectAddCtrlr as addCtrl"
            });
    }
})();