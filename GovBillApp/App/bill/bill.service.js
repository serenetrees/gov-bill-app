(function () {
    'use strict';

    // Get a reference to the module.
    var billApp = angular.module('congress.bill');

    billApp.service('billService', ['$http', '$q', billService]);

    function billService ($http, $q) {

        var self = this;

        function getBills() {
            var deferred = $q.defer();

            $http.get('api/bill/')
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                var errorMsg = "Error while fetching revisions.";
                console.error(errorMsg);
                alert(errorMsg);
                
                deferred.reject(errorMsg);
            })
            .finally(function () {
                // Code that needs to be executed all the time can be placed here.
            });

            return deferred.promise;
        };

        var service = {
            getBills: getBills
        };

        return service;
    }

})();
