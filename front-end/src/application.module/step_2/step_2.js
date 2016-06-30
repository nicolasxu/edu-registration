var angular = require('angular');
var am = require('../application.module.js');


angular.module(am.name)
	.controller('step_2_ctrl', step_2_ctrl);

// Dependency injection
step_2_ctrl.$inject = [];
// Controller definition
function step_2_ctrl () {
	this.name = "step 2";
}
step_2_ctrl.prototype.greeting = function () {
	alert('greeting...');
}
