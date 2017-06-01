/*global angular, console*/
(function () {
    'use strict';
    angular
        .module('task')
        .factory('task', task);
    task.$inject = ['$q', '$http', '$sce', 'utilService'];
    function task($q, $http, $sce, utilService) {
        var base_url = 'http://localhost:3030/',
            all_task_url = 'gettasks',
            breif_task_url = 'gettask',
            add_task_url = 'addtask',
            updateStatus_task_url = 'updatestatus',
            myTask = {};

        return {
            getAllTasks: function (newDateValue) {
                var deffered = $q.defer();
                $http.get(base_url + all_task_url + "?date=" + newDateValue)
                    .then(function (response) {
                        deffered.resolve(response.data);
                        return deffered.promise;
                    }, function (response) {
                        deffered.reject(response);
                        return deffered.promise;
                    });
                return deffered.promise;
            },
            getTaskById: function (task_id) {
                var deffered = $q.defer(),
                    task_param = {
                        '_id': task_id
                    };
                $http.post(base_url + breif_task_url, task_param)
                    .then(function (response) {
                        deffered.resolve(response.data);
                        return deffered.promise;
                    }, function (response) {
                        deffered.reject(response);
                        return deffered.promise;
                    });
                return deffered.promise;
            },
            addTask: function (newTask) {
                var deffered = $q.defer(),
                    task_param = newTask;
                $http.post(base_url + add_task_url, task_param)
                    .then(function (response) {
                        deffered.resolve(response.data);
                        return deffered.promise;
                    }, function (response) {
                        deffered.reject(response);
                        console.log(response);
                        return deffered.promise;
                    });
                return deffered.promise;
            },
            updateStatus: function (taskId, updatedStatus) {
                var deffered = $q.defer(),
                    task_param = {
                        _id: taskId,
                        status: updatedStatus
                    };
                $http.post(base_url + updateStatus_task_url, task_param)
                    .then(function (response) {
                        deffered.resolve(response.data);
                        return deffered.promise;
                    }, function (response) {
                        deffered.reject(response);
                        console.log(response);
                        return deffered.promise;
                    });
                return deffered.promise;
            },
            taskDashJson: function (allTask, allProjects) {
                var deffered = $q.defer(),
                    i = 0,
                    j = 0;
                for (i in allTask) {
                    for (j in allProjects) {
                        if (allTask[i].p_id === allProjects[j]._id) {
                            allTask[i].project_name = allProjects[j].project_name;
                        } /*else {
                            allTask[i].project_name = "Not defined";
                        }*/
                    }
                    allTask[i].create_date = (utilService.convertDate(new Date(allTask[i].create_date).getDay(),2) + ", " + utilService.convertDate(new Date(allTask[i].create_date).getMonth(),1) + " " + new Date(allTask[i].create_date).getDate() + " " + new Date(allTask[i].create_date).getFullYear()).toString();
                }
                /*deffered.resolve = allTask;*/
                return allTask;
            },
            setTask: function (task) {
                myTask = task;
            },
            getTask: function () {
                return myTask;
            }
        };
    }
})();