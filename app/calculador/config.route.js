'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
    $stateProvider
        .state('calcular', {
            url: '/',
            template: require('./calcular.html'),
            controller: 'CalcularController',
            controllerAs: 'vm'
        })
        .state('desglosar', {
            url: '/desglosar',
            template: require('./calcular.html'),
            controller: 'DesglosarController',
            controllerAs: 'vm'
        });
}

module.exports = configRoute;