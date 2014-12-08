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
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var cssData ={
    	categories:['SASS','Responsive','Animations','Compass','Legacy','test'],
    	points:[6,5,4,5,3,9]
    };

    var jsData={
    	categories:['Angular','jQuery','CoffeScript','Ember','YUI'],
    	points:[6,7,4,3,7]
    };

    var generalData={
    	categories:['CSS','Javascript','HTML','Git','Flash'],
    	points:[7, 7, 8, 6, 8]
    };

 	var miscData = {
 		categories:['JSON','mySQL','php','Java'],
 		points:[8,4,3,5]
 	};

    var options = {

	        chart: {
	            polar: true,
	            type: 'line',
	            width:400,
	            height:400,
	            marginLeft:-20,
	            borderColor: '#7d7f6a'
	        },
	        plotOptions: {
            	series: {
                	lineWidth:3
           	 	}
       		},

	        colors: ['#7d7f6a'],

	        title: {
	            text: null
	        },

	        pane: {
	            size: '75%'
	        },

	        xAxis: {
	            categories: ['CSS','Javascript','HTML','Git','Flash'],
	            tickmarkPlacement: 'off',
	            lineWidth: 0,
	            lineColor: 'transparent',
	            minorGridLineWidth: 0,
			    minorTickLength: 0,
			    tickLength: 0,
			    gridLineWidth : 0
	        },

	        yAxis: {
	            gridLineInterpolation: 'polygon',
	            lineWidth: 0,
	            min: 0,
	            labels:{
	            	enabled:false
	            },
			    minorGridLineWidth: 0,
			    lineColor: 'transparent',
			    minorTickLength: 0,
			    tickLength: 0,
			    tickInterval:10
	        },

	        tooltip: {
	            shared: true,
	            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b><br/>'
	        },

	        legend: {
	        	enabled:false
	        },
	        exporting:{
	        	enabled:false
	        },

	        series: [{
	            name: 'Skill',
	            data: [7, 7, 8, 6, 8],
	            pointPlacement: 'on'
	        }]
    };


    $(document).ready(function(){

 		$('#chart').highcharts(options);
    });

    $scope.setData=function(skill){
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
