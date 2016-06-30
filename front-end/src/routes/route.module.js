var angular = require('angular');
var uiRouter = require('angular-ui-router');
var am = require('../application.module/application.module');

module.exports = angular.module('route.module', [uiRouter, am.name])
	.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('step-1', {
			url: '/step-1',
			views: {
				'application-navigation': {
					template: require('html!../application.module/application_navigation/application_navigation.html'),
					controller: 'app_nav_ctrl',
					controllerAs: 'vm'
				},
				'application-step': {
					template: require('html!../application.module/step_1/step1.html'),
					controller: 'step_1_ctrl',
					controllerAs: 'vm'
				}
			}
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

