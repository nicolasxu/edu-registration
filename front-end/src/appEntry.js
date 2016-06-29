require('jquery');
require('angular');
require('bootstrap-loader');
require('./scss/style.scss');

var appModule = require('./app/app.module.js');

angular.element(document).ready(function(){
	angular.bootstrap(document, [appModule.name]);
});
 

