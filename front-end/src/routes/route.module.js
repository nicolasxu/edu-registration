var angular = require('angular');
var uiRouter = require('angular-ui-router');
var am = require('../application.module/application.module');

module.exports = angular.module('route.module', [uiRouter, am.name])
	.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('state1', {
			url: '/state1---',
			template: '<h1 ng-click="vm.greeting($event)">{{vm.name}}</h1>',
			// templateUrl: 'views/state1.html'
			controller: 'step_1_Ctrl',
			controllerAs: 'vm'
		})
		.state('state2', {
			url: '/state2---', 
			template: '<h1>this is state2</h1>',
			// templateUrl: 'views/state1.html'
			controller: function ($scope) {
				$scope.variable2 = "abcd - variable2";
			}
		});
}

