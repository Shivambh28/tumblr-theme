angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'pages/about.html',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'pages/contact.html',
        controller: 'contactCtrl'
      })
  }])