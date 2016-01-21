'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            template: require('./layout.html'),
            controller: 'LayoutController',
            controllerAs: 'vm'
        });
}

module.exports = configRoute;