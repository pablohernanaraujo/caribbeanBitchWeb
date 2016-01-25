'use strict';

/**
 * @ngdoc overview
 * @name caribbeanBitchWebApp
 * @description
 * # caribbeanBitchWebApp
 *
 * Main module of the application.
 */
angular
  .module('caribbeanBitchWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(['$rootScope', function ($rootScope) {

      //create a new instance
      new WOW().init();

    $rootScope.$on('$routeChangeStart', function (next, current) {

      //when the view changes sync wow
      new WOW().sync();

    });
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl',
        controllerAs: 'inicio'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
