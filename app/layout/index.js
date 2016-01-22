'use strict';

var ivamatico = require('angular').module('ivamatico.layout', []);

ivamatico.config(require('./routes'));
ivamatico.controller('CalculadorController', require('./calculador.controller'));
ivamatico.factory('tabsService', require('./tabs/tabs.factory'));
ivamatico.directive('tabs', require('./tabs/tabs.directive'));
ivamatico.directive('ivamatico', require('./ivamatico/ivamatico.directive'));
