'use strict';

var ivamatico = require('angular').module('ivamatico.layout', []);

ivamatico.config(require('./config.route'));
ivamatico.controller('LayoutController', require('./layout.controller'));
