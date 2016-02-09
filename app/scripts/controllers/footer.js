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
   

    $http.get('./assets/social.json').success(function(data){
   		$scope.icons = data;
    });

  });
