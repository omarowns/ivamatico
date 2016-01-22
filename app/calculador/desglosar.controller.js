'use strict';

DesglosarController.$inject = [];

function DesglosarController() {
    var vm = this;
    vm.title = 'Desglosar';
    activate();

    /////////////////////////////

    function activate() {
        console.log('Desglosar');
    }
}

module.exports = DesglosarController;