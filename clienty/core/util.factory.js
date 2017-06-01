/*global angular, console*/
(function () {
    'use strict';
    angular
        .module('task')
        .factory('utilService', utilService);
    function utilService() {

        return {
            convertDate: function convertDate(input, mode) {
                var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    month =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                // month Conversion
                if (mode === 1) {
                    return month[parseInt(input)];
                }
                // day conversion
                else if (mode === 2) {
                    return weekday[parseInt(input)];
                }
            }
        };
    }
})();   
