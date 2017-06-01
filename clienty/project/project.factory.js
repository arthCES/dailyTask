/*global angular, FB, console*/
(function () {
    'use strict';
    angular
        .module('project')
        .factory('projectService', projectService);

    projectService.$inject = ['$q', '$http', '$sce'];

    function projectService($q, $http, $sce) {
        var base_url = 'http://localhost:3030/',
            all_project_url = 'getprojects',
            breif_project_url = 'getproject',
            add_project_url = 'addproject';

        return {
            getAllprojects: function () {
                var deffered = $q.defer();
                $http.get(base_url + all_project_url)
                    .then(function (response) {
                        deffered.resolve(response.data);
                        return deffered.promise;
                    }, function (response) {
                        deffered.reject(response);
                        return deffered.promise;
                    });
                return deffered.promise;
            },
            getProjectById: function (project_id) {
                var deffered = $q.defer(),
                    project_param = {
                        '_id': project_id
                    };
                $http.post(base_url + breif_project_url, project_param)
                    .then(function (response) {
                        deffered.resolve(response.data);
                        return deffered.promise;
                    }, function (response) {
                        deffered.reject(response);
                        return deffered.promise;
                    });
                return deffered.promise;
            },
            addProject: function (newproject) {
                 var deffered = $q.defer(),
                    project_param = newproject;
                $http.post(base_url + add_project_url, project_param)
                    .then(function (response) {
                        deffered.resolve(response.data);
                        return deffered.promise;
                    }, function (response) {
                        deffered.reject(response);
                        console.log(response);
                        return deffered.promise;
                    });
                return deffered.promise;
            }
        };
    }
})();