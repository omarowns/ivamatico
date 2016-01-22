'use strict';

IvamaticoDirective.$inject = [];

function IvamaticoDirective() {
    var directive = {
        restrict: 'A',
        template: require('./ivamatico.html'),
        bindToController: true,
        controller: IvamaticoController,
        controllerAs: 'ivamaticoVM'
    };

    return directive;
}

IvamaticoController.$inject = ['iva', 'tabsService', '$scope'];

function IvamaticoController(iva, tabs, $scope) {
    var vm = this;
    vm.iva = {
        importe: 0,
        impuesto: 0,
        total: 0
    };

    vm.change = change;

    $scope.$on('changeUpdate', handleChange);

    activate();

    function activate() {
        handleChange();
    }

    function handleChange(event, data) {
        if (tabs.get() === 'layout.calcular') {
            vm.update = iva.calcular;
        } else {
            vm.update = iva.desglosar;
        }
        change();
    }

    function change() {
        vm.update(vm.input);
        vm.iva = iva.obtener();
    }
}

module.exports = IvamaticoDirective;