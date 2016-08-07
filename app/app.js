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
            templateUrl: 'view1/view1.html'

          })

          .state('landingPage', {

            url: 'landing-page',
            templateUrl: 'view2/view2.html'


      })
}]);
