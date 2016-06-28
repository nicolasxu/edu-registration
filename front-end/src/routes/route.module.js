var angular = require('angular');

var uiRouter = require('angular-ui-router');
console.log(uiRouter);
module.exports = angular.module('route.module', [uiRouter])
	.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('state1', {
			url: '/state1---',
			template: '<h1>this is state1</h1>',
			// templateUrl: 'views/state1.html'
			controller: function ($scope) {
				$scope.variable1 = "abcd - variable1";
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

