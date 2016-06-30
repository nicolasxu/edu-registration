var angular = require('angular');
var am = require('../application.module.js');

angular.module(am.name)
	.controller('app_nav_ctrl', app_nav_ctrl);


// controller definition
app_nav_ctrl.$inject = [];
function app_nav_ctrl() {
	this.name = 'navigation nick';
}

app_nav_ctrl.prototype.greeting = function () {
	alert('navigation greeting');
}