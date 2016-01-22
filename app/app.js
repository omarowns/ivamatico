'use strict';

var angular = require('angular');

var ivamatico = angular.module('ivamatico', [
    'ivamatico.core',
    'ivamatico.constants',
    'ivamatico.header',
    'ivamatico.iva',
    'ivamatico.layout',
]);

require('./core');
require('./constants');
require('./header');
require('./iva');
require('./layout');