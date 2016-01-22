'use strict';

var ivamatico = require('angular').module('ivamatico.calculador', []);

ivamatico.config(require('./config.route'));
ivamatico.controller('CalcularController', require('./calcular.controller'));
ivamatico.controller('DesglosarController', require('./desglosar.controller'));
ivamatico.directive('result', require('./result.directive'));