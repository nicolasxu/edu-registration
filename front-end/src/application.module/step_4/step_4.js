var angular = require('angular');
var am = require('../application.module.js');

angular.module(am.name)
	.controller('step_4_ctrl', step_4_ctrl);


// Dependency injection
step_4_ctrl.$inject = [];
// Controller definition
function step_4_ctrl () {
	this.name = "step 4";
}

step_4_ctrl.prototype.greeting = function () {
	alert('greeting...');
}