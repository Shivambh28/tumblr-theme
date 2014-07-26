var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	//set up the routes
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'homeCtrl'
		})
		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutCtrl'
			
		})
		.when('/contact', {
			templateUrl: 'pages/about.html',
			controller: 'contactCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
});

app.controller('homeCtrl', function($scope) {
	$scope.message = 'home page!';
});

app.controller('aboutCtrl', function($scope) {
	$scope.message = 'about page!';
});

app.controller('contactCtrl', function($scope) {
	$scope.message = 'contact page!';
});