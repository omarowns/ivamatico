'use strict';

TabsDirective.$inject = [];

function TabsDirective() {
    var directive = {
        restrict: 'A',
        template: require('./tabs.html')
    };

    return directive;
}

module.exports = TabsDirective;