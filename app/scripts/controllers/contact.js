'use strict';

/**
 * @ngdoc function
 * @name andrewjbyrneApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the andrewjbyrneApp
 */
angular.module('andrewjbyrneApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;

    self.submit=function(){
    	console.log('asdf');
    };


    
  });
