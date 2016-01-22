'use strict';

HeaderDirective.$inject = ['APP_CONSTANTS'];

function HeaderDirective(CONSTANTS) {
    var directive = {
        restrict: 'A',
        template: require('./header.html'),
        link: link
    };
    return directive;

    function link(scope, element, attrs) {
        var title = element.find('h1');
        var subtitle = element.find('h2');

        title.text(CONSTANTS.HEADER_TITLE);
        subtitle.text(CONSTANTS.HEADER_SUBTITLE);
    }
}

module.exports = HeaderDirective;