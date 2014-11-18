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
              data    : $scope.user,  //param method from jQuery
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
          }).success(function(data){
              if (data.success) { //success comes from the return json object
                console.log('yay');
              } else {
                console.log('nay');
              }
          });

    };
});
