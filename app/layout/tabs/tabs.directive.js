'use strict';

TabsDirective.$inject = [];

function TabsDirective() {
    var directive = {
        restrict: 'A',
        template: require('./tabs.html'),
        bindToController: true,
        controller: TabsController,
        controllerAs: 'tabsVM'
    };

    return directive;
}

TabsController.$inject = ['CONSTANTS', 'tabsService', '$scope'];

function TabsController(CONSTANTS, tabs, $scope) {
    var vm = this;
    vm.tabs = [];
    vm.update = update;

    activate();

    function activate() {
        vm.tabs = CONSTANTS.TABS;
    }

    function update(state) {
        tabs.update(state);
        $scope.$emit('tabsChanged', {});
    }
}

module.exports = TabsDirective;