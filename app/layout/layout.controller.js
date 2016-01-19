'use strict';

LayoutController.$inject = ['$state'];

function LayoutController($state) {
    var vm = this;
    vm.title = 'Angular boilerplate';

    activate();

    ///////////////////////////////

    function activate() {
        console.log('Controller active');
    }
}

module.exports = LayoutController;