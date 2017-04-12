'use strict';

/**
 * @ngdoc overview
 * @name dataglenApp
 * @description
 * # dataglenApp
 *
 * Main module of the application.
 */
angular
  .module('dataglenApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/inverter/:id', {
        templateUrl: 'views/inverter.html',
        controller: 'inverterController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
