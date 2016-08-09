'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
    'ui.bootstrap',
    'ngTouch',
    'ngAnimate',
  'myApp.version'

]).
config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouteProvider, $locationProvider) {


        $locationProvider.html5Mode({

            enabled: true

        });

      $stateProvider
          .state('home' , {

            url: '/home',
            templateUrl: 'app/landingPage/landingPage.html'

          })

          .state('landingPage', {

            url: '/landing-page',
            templateUrl: 'app/homePage/homePage.html'


      })



}]);
