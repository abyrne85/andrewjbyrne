'use strict';
/*global $:false */
/**
 * @ngdoc function
 * @name andrewjbyrneApp.controller:AboutctrlCtrl
 * @description
 * # AboutctrlCtrl
 * Controller of the andrewjbyrneApp
 */
angular.module('andrewjbyrneApp')
  .controller('AboutCtrl', function ($scope, Highchartoptions) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',

    ];

    var cssData ={
    	categories:['SASS','Responsive','Animations','Compass','Legacy'],
    	points:[8,6,5,6,4]
    };

    var jsData={
    	categories:['Angular','jQuery','CoffeScript','Ember','YUI'],
    	points:[6,8,2,3,7]
    };

    var generalData={
    	categories:['CSS','Javascript','HTML','Git','Flash'],
    	points:[7, 7, 8, 6, 8]
    };

 	var miscData = {
 		categories:['JSON','mySQL','php','Java', 'GSAP'],
 		points:[8,4,3,5,6]
 	};


    $(document).ready(function(){

 		$('#chart').highcharts(Highchartoptions);
    });

    $scope.setData=function(skill){
    	var options = Highchartoptions;
	    switch (skill) {
		  case 'css':
		    options.xAxis.categories=cssData.categories;
		    options.series[0].data=cssData.points;
		    break;

		  case 'javascript':
		    options.xAxis.categories=jsData.categories;
		    options.series[0].data=jsData.points;
		    break;

		  case 'general':
		    options.xAxis.categories=generalData.categories;
		    options.series[0].data=generalData.points;
		    break;

		  case 'misc':
		    options.xAxis.categories=miscData.categories;
		    options.series[0].data=miscData.points;
		    break;
		}
		$('#chart').highcharts(options);
    };

 });
