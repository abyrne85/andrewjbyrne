'use strict';

/**
 * @ngdoc service
 * @name andrewjbyrneApp.Highchartoptions
 * @description
 * # Highchartoptions
 * Service in the andrewjbyrneApp.
 */
angular.module('andrewjbyrneApp')
  .service('Highchartoptions', function Highchartoptions() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return{
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
   
});
