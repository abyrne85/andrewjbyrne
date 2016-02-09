/*global $:false */
'use strict';

/**
 * @ngdoc function
 * @name andrewjbyrneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the andrewjbyrneApp
 */
angular.module('andrewjbyrneApp')
  .controller('MainCtrl', function ($scope) {
    


    $('.brand').hover(
      function(){
        $('.brand-name').filter(':not(:animated)').animate({
          color:'#f8f8f8'
        },200);
      // This only fires if the row is not undergoing an animation when you mouseover it
      },
      function() {
        $('.brand-name').animate({
            color:'#7d7f6a'
        },20);
    });

  });

