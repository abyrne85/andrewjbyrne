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

    $(document).ready(function(){



 		$('#chart').highcharts({

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
	            size: '80%'
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
    	});
    });
 });
