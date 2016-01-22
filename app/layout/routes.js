'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
    $stateProvider
        .state('layout', {
            abstract: true,
            template: require('./layout.html'),
            controller: 'CalculadorController',
            controllerAs: 'vm'
        })
        .state('layout.calcular', {
            url: '/',
            parent: 'layout'
        })
        .state('layout.desglosar', {
            url: '/desglosar',
            parent: 'layout'
        });
}

module.exports = configRoute;