'use strict';

/**
 * @ngdoc function
 * @name andrewjbyrneApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the andrewjbyrneApp
 */
angular.module('andrewjbyrneApp')
  .controller('FooterCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('./assets/social.json').success(function(data){
   		$scope.icons = data;
    });
    

  });
