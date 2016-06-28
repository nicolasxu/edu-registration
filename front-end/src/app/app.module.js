var angular = require('angular');

var rm = require('../routes/route.module.js');


module.exports = angular.module('app.module', [rm.name])
	.run(function(){});