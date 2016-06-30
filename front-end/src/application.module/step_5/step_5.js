var angular = require('angular');
var am = require('../application.module.js');

angular.module(am.name)
	.controller('step_5_ctrl', step_5_ctrl);

step_5_ctrl.$inject = [];

function step_5_ctrl () {
	this.name = "step 5";
}

step_5_ctrl.prototype.greeting = function () {
	alert('greeting...');
}
