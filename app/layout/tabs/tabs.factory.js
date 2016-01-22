'use strict';

TabsFactory.$inject = ['$state'];

function TabsFactory($state) {
    var state = $state.current.name;
    var service = {
        get: getActive,
        update: updateState
    };

    return service;

    function getActive() {
        return state;
    }

    function updateState(s) {
        state = s;
    }
}

module.exports = TabsFactory;