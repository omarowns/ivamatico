'use strict';

HeaderDirective.$inject = [];

function HeaderDirective() {
    var directive = {
        restrict: 'A',
        template: require('./header.html')
    };
    return directive;
}

module.exports = HeaderDirective;