/* Defining mail module for application */
var app = angular.module('mainApp', ['ui.router']);

/* Handling routes */
app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/dashboard.html',
			controller:'HomeController as homeCtrl'
		});	
});