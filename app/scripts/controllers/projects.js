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

   		$scope.gitDefined=function(value){
   			return angular.isDefined(value);
   		};

   		$scope.linkDefined=function(value){

   			if(angular.isDefined(value)){
   				return true;
   			}else{
   				//Copy image and stick it back in the <li>

   			}
   		};

	});

  