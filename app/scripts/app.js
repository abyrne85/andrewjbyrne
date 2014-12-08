'use strict';

/**
 * @ngdoc overview
 * @name andrewjbyrneApp
 * @description
 * # andrewjbyrneApp
 *
 * Main module of the application.
 */
angular
  .module('andrewjbyrneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })    
      .when('/contact',{
        templateUrl:'views/contact.html',
        controller: 'ContactCtrl as ctrl'
      })
      .when('/about',{
        templateUrl:'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  });



