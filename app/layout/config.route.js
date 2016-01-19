'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: 'app/layout/layout.html',
            controller: 'LayoutController',
            controllerAs: 'vm'
        });
}

module.exports = configRoute;