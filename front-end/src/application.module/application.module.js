
/*
	application.module
	module to handle student application
*/
var angular = require('angular');
var datepicker = require('angular-ui-bootstrap');
var ngAnimate = require('angular-animate');
console.log(ngAnimate);
module.exports = angular.module('application.module', [datepicker, ngAnimate]);

require('./step_1/step_1.js');
require('./application_navigation/application_navigation.js');

require('./step_2/step_2.js');
require('./step_3/step_3.js');
require('./step_4/step_4.js');
require('./step_5/step_5.js');