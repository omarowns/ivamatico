'use strict';

ResultDirective.$inject = [];

function ResultDirective() {
    var directive = {
        restrict: 'A',
        scope: {
            text: '=',
            importe: '='
        },
        template: require('./result.html'),
        bindToController: true,
        controller: ResultController,
        controllerAs: 'vm'
    };

    return directive;
}

function ResultController() {
    var vm = this;
}

module.exports = ResultDirective;