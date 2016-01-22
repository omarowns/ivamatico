'use strict';

TabsDirective.$inject = [];

function TabsDirective() {
    var directive = {
        restrict: 'A',
        template: require('./tabs.html'),
        bindToController: true,
        controller: TabsController,
        controllerAs: 'vm'
    };

    return directive;
}

TabsController.$inject = ['CONSTANTS'];

function TabsController(CONSTANTS) {
    var vm = this;
    vm.tabs = [];

    activate();

    function activate() {
        vm.tabs = CONSTANTS.TABS;
    }
}

module.exports = TabsDirective;