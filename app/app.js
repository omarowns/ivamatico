'use strict';

var angular = require('angular');

var ivamatico = angular.module('ivamatico', [
    'ivamatico.core',
    'ivamatico.constants',
    'ivamatico.header',
    'ivamatico.tabs',
    'ivamatico.calculador',
    'ivamatico.operaciones',
    'ivamatico.result'
]);

require('./core');
require('./constants');
require('./header');
require('./tabs');
require('./calculador');
require('./operaciones');
require('./result');