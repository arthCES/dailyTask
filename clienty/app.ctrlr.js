/*global angular, FB*/
(function () {
    'use strict';
    angular
        .module('app')
        .controller('AppCtrlr', Appctrlr);
    function Appctrlr() {
        var vm = this;
        vm.day = new Date();
    }
})();