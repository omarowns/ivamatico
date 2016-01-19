'use strict';

require('angular-animate');
require('angular-ui-router');

var ivamatico = require('angular').module('ivamatico.core', [
        /*
        * Angular Modules
        */
        'ngAnimate', 'ui.router',

        /*
        * Reusable cross app core modules
        */

        /*
        * 3rd Party app modules
        */
]);

ivamatico.config(require('./config'));