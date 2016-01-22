'use strict';

CalculadorController.$inject = ['$scope'];

function CalculadorController($scope) {
    var vm = this;
    activate();

    $scope.$on('tabsChanged', function(event, data) {
        $scope.$broadcast('changeUpdate', {});
    });

    function activate() {
    }
}

module.exports = CalculadorController;