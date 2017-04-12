'use strict';

/**
 * @ngdoc function
 * @name dataglenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataglenApp
 */
angular.module('dataglenApp')
  .controller('MainCtrl', function ($http,$scope,$location) {
    $http({
      method :'GET',
      url : '//api.myjson.com/bins/c195t'
    }).then(
      function(success){
        $scope.inverters = success.data.inverters;
      }
    );
  $scope.showInverter = function(inverter){
      $location.path('/inverter/'+inverter.name);
      localStorage.setItem('inverter',JSON.stringify(inverter));
  }
  }).controller('inverterController',function($scope){
    $scope.inverter = JSON.parse(localStorage.getItem('inverter'));
});
