
/*
	application.module
	module to handle student application
*/
var angular = require('angular');

module.exports = angular.module('application.module', []);

require('./step_1/step_1.js');
require('./application_navigation/application_navigation.js');

require('./step_2/step_2.js');
