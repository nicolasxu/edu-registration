var angular = require('angular');
var am = require('../application.module.js');

angular.module(am.name)
	.controller('step_3_ctrl', step_3_ctrl);

step_3_ctrl.$inject = [];
function step_3_ctrl () {
	this.name = "step 3";
	this.dt = new Date();
	this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	this.format = this.formats[0];
	this.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };
  this.altInputFormats = ['M!/d!/yyyy'];
  this.popup1 = {
    opened: false
  };

}

step_3_ctrl.prototype.greeting = function () {
	alert('greeting...');
}

step_3_ctrl.prototype.open1 = function () {
	this.popup1.opened = true;
}

function disabled(data) {
  var date = data.date,
    mode = data.mode;
  return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
}