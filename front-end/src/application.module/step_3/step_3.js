var angular = require('angular');
var am = require('../application.module.js');

angular.module(am.name)
	.controller('step_3_ctrl', step_3_ctrl);

step_3_ctrl.$inject = [];
function step_3_ctrl () {
	this.name = "step 3";
}

step_3_ctrl.prototype.greeting = function () {
	alert('greeting...');
}
