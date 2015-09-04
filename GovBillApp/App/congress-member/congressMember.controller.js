(function () {
    'use strict';

    // Get a reference to the module.
    var congressMemberApp = angular.module('congress.congressMember');

    congressMemberApp.controller('CongressMemberCtrl', [CongressMemberCtrl]);

    function CongressMemberCtrl () {
        this.changeState = function() {
            $state.go("congressMember.list");
        }
    };
})();
