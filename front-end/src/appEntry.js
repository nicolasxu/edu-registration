require('bootstrap-loader');
require('./scss/style.scss');
require('jquery');
require('angular');


var appModule = require('./app/app.module.js');

angular.element(document).ready(function(){
	angular.bootstrap(document, [appModule.name]);
});
 

