/*global angular*/
(function () {
    'use strict';
    angular
        .module('task')
        .config(config);
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/task/");

        $stateProvider
            .state('task', {
                url: "/task",
                templateUrl: "/task/task-shell.html",
                controller: "TaskCtrlr as taskCtrl"
            })
            .state('task.dash', {
                url: "/dash",
                templateUrl: "/task/dash/task-dash.view.html",
                controller: "TaskDashCtrlr as dashCtrl"
            })
            .state('task.detail', {
                url: "/detail/:taskId",
                templateUrl: "/task/detail/task-detail.view.html",
                controller: "TaskDetailCtrlr as detailCtrl"
            })
            .state('task.addnew', {
                url: "/addnew",
                templateUrl: "/task/add/task-add.view.html",
                controller: "TaskAddCtrlr as addCtrl"
            });
    }
})();

/*
   
            .state('task.alltask', {
                url: "/alltask",
                templateUrl: "/task/template/task.dash.html",
                controller: "TaskCtrlr as tctrlr"
            })*/