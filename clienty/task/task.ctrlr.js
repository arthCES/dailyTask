/*global angular, console*/
(function () {
    'use strict';
    angular
        .module('task')
        .controller('TaskCtrlr', TaskCtrlr);
    TaskCtrlr.$inject = ['$q', '$state'];
    function TaskCtrlr($q, $state) {
        var vm = this;
    }
})();