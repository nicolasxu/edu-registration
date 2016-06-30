
/*
	application.module
	module to handle student application
*/
var angular = require('angular');
var datepicker = require('angular-ui-bootstrap/src/datepicker');
module.exports = angular.module('application.module', [datepicker]);

require('./step_1/step_1.js');
require('./application_navigation/application_navigation.js');

require('./step_2/step_2.js');
require('./step_3/step_3.js');

