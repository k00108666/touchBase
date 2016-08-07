'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
    'ui.bootstrap',
    'ngTouch',
    'ngAnimate',
  'myApp.version'

]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {


      $stateProvider
          .state('home' , {

            url: '/home',
            templateUrl: 'landingPage/landingPage.html'

          })

          .state('landingPage', {

            url: 'landing-page',
            templateUrl: 'homePage/homePage.html'


      })
}]);
