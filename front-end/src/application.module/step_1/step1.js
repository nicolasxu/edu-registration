var angular = require('angular');
var am = require('../application.module.js');

angular.module(am.name)
	.controller('step_1_ctrl', step_1_ctrl);


// controller definition
step_1_ctrl.$inject = [];
function step_1_ctrl () {
	this.name = 'Nicolas Xu'; // controller as
}

step_1_ctrl.prototype.greeting = function () {
	alert('greeting...');
}