/*global angular, console*/
(function () {
    'use strict';
    angular
        .module('time')
        .factory('addCommit', addCommit);
    addCommit.$inject = ['$q', '$http'];
    function addCommit($q, $http) {
        var base_url = 'http://localhost:3030/',
            add_commit_url = 'commitTime';

        return {
            addCommit: function (fromTime, toTime, task_id, date, comment) {
                var deffered = $q.defer(),
                    params = {
                        task_id: task_id,
                        date: date,
                        from: fromTime,
                        to: toTime,
                        comment: comment
                    };
                $http.post(base_url + add_commit_url, params)
                    .then(function (response) {
                        deffered.resolve(response.data);
                        return deffered.promise;
                    }, function (response) {
                        deffered.reject(response);
                        return deffered.promise;
                    });
                return deffered.promise;
            }
        };
    }
})();