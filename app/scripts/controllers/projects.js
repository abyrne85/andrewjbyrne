'use strict';

/**
 * @ngdoc function
 * @name andrewjbyrneApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the andrewjbyrneApp
 */
angular.module('andrewjbyrneApp')



	.controller('ProjectsCtrl', function ($scope, $http) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];

   		$http.get('./assets/projects.json').success(function(data){
   			$scope.projects = data;
    	});


	});

  