'use strict';

var angular = require('angular');

var ivamatico = angular.module('ivamatico', [
    'ivamatico.core',
    'ivamatico.header',
    'ivamatico.layout',
]);

require('./core');
require('./header');
require('./layout');