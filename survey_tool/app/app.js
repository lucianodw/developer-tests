
angular
  .module('crowdTwistApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
   
    $routeProvider
      .when('/', {
        templateUrl: 'app/create/create.html',
        controller: 'app.create.controller'
      })
      .otherwise({
        redirectTo: '/'
      });

  });