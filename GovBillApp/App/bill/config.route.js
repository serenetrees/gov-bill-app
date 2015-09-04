(function() {
    'use strict';

    // Get a reference to the module.
    var billApp = angular.module('congress.bill');

    billApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      // For any unmatched url, send to /bill
        $urlRouterProvider.otherwise("/bill");

        // Reference the ui-router site for an explanation of using an abstract parent state: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-set-up-a-defaultindex-child-state
        $stateProvider
            .state('bill', {
                url: '/bill',
                abstract: true,
                template: '<ui-view id="bill-abstract-parent" />'
            })
            // bill.list is the default child state, so leave its url blank.
            .state('bill.list', {
                url: '', 
                templateUrl: '/app/bill/bill.list.html', 
                data: {
                    pageTitle: 'Bills' 
                }
            })
            //.state('bill.detail', {
            //    url: '/detail', 
            //    templateUrl: '/app/bill/bill.detail.html/{id}', 
            //    data: {
            //        pageTitle: 'Bill Detail' 
            //    }
            //})
        ;
    }]);

})();
