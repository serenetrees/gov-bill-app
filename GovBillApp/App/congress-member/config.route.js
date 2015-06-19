(function() {
    'use strict';

    // Get a reference to the module.
    var billApp = angular.module('congress.bill');

    billApp.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('congressMember', {
                 url: '/congressmember', 
                templateUrl: 'app/congress-member/congressMember.home.html', 
                data: {
                     pageTitle: 'Congress Members'
                }
            })
            .state('congressMember.list', { 
                url: '/congressmember.list', 
                templateUrl: 'app/congress-member/congressMember.list.html',
                data: {
                     pageTitle: 'Congress Members'
                }

            });
    }]);

})();
