'use strict';
/**
 * @ngdoc function
 * @name andrewjbyrneApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the andrewjbyrneApp
 */
angular.module('andrewjbyrneApp').controller('ProjectsCtrl', function ($scope, $http) {
  
    $scope.selected = -1;

 	  $http.get('./assets/projects.json').success(function(data){
 			$scope.projects = data;
	    });


 		$scope.linkDefined=function(value){
 			return angular.isDefined(value);
 		};

    $scope.open = function(item){
      $scope.opened = item;
    };
          
    $scope.anyItemOpen = function() {
        return $scope.opened !== undefined;
    };
    
    //Yay this guy 
    //http://stackoverflow.com/questions/20902583/angularjs-best-practices-on-adding-an-active-class-on-click-ng-repeat
     


    $scope.select= function(index) {
       $scope.selected = index; 
    };

  });

  