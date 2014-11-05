'use strict';

/**
 * @ngdoc function
 * @name andrewjbyrneApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the andrewjbyrneApp
 */
angular.module('andrewjbyrneApp')
  .controller('ContactCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.success = false;
    $scope.error = false;

    $scope.submit = function () {

    $http({
        method  : 'POST',
        url     : 'email.php',
        data    : $scope.user,
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    };
});
