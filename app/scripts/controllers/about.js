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
    	Highcharts.setOptions({
        	colors: ['#7d7f6a']
    	});


 		$('#chart').highcharts({

	        chart: {
	            polar: true,
	            type: 'line',
	            width:800,
	            height:600,
	            marginLeft:-200
	        },

	        title: {
	            text: null
	        },

	        pane: {
	            size: '85%'
	        },

	        xAxis: {
	            categories: ['CSS','Javascript','HTML','Git','Flash'],
	            tickmarkPlacement: 'off',
	            lineWidth: 0
	        },

	        yAxis: {
	            gridLineInterpolation: 'polygon',
	            lineWidth: 0,
	            min: 0,
	            labels:{
	            	enabled:false
	            }
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
	            name: 'Skills',
	            data: [7, 7, 8, 6, 8],
	            pointPlacement: 'on'
	        }]
    	});
    });
 });
