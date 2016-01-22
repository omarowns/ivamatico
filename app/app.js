'use strict';

var angular = require('angular');

var ivamatico = angular.module('ivamatico', [
    'ivamatico.core',
    'ivamatico.header',
    'ivamatico.tabs',
    'ivamatico.calculador',
]);

require('./core');
require('./header');
require('./tabs');
require('./calculador');