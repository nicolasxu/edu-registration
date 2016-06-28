var angular = require('angular');

module.exports = angular.module('application.module', [])
	.controller('step_1_Ctrl', step_1_Ctrl);

// step_1_Ctrl.$inject = [''];
function step_1_Ctrl() {
	this.name = 'Nicolas Xu'; // controller as

}
step_1_Ctrl.prototype.greeting = function ($event) {
	//console.log($event);
	alert('greeting...');
}
