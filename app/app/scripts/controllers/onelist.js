'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:OnelistCtrl
 * @description
 * # OnelistCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('OnelistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
