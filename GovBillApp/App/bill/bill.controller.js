(function () {
    'use strict';

    // Get a reference to the module.
    var billApp = angular.module('congress.bill');

    billApp.controller('BillCtrl', ['billService', BillCtrl]);

    function BillCtrl (billService) {
        var self = this;
        self.bills = [];
        self.selectedBill = {};
        self.editBillDetails = false;
        self.showBillDetails = false;
        
        self.closeEditBill = function() {
            self.editBillDetails = false;
            self.showBillDetails = true;
        };

        self.editBill = function() {
            self.editBillDetails = true;
            self.showBillDetails = false;
        };

        self.loadBillDetails = function(bill) {
            self.selectedBill = bill;
            self.showBillDetails = true;
        };

        var init = function() {

            billService.getBills()
            .then(
                // Success function
                function (retBills) {
                    if (retBills != null) {
                        angular.copy(retBills, self.bills);
                    } 
                
                    else {
                        angular.copy([], self.bills);
                    }

                    console.log('Successfully fetched all bills.');
                },

                // Error function
                function (msg) {
                    var errorMsg = 'Error while fetching policy revisions. ' + msg;
                    console.error(errorMsg);
                    alert(errorMsg);
            })
            .finally(function () {
                // Code that needs to be executed all the time can be placed here.
            });

        };

        init();
    };

})();
