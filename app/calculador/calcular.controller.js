'use strict';

CalcularController.$inject = [];

function CalcularController() {
    var vm = this;
    vm.title = 'Calcular';
    activate();

    /////////////////////////////

    function activate() {
        console.log('Calcular');
    }
}

module.exports = CalcularController;