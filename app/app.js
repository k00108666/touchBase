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

        $urlRouteProvider.otherwise('/');

      $stateProvider

          .state('links' , {

              url: '/linksPage',
              templateUrl: 'touchbase/app/linksPage/externalPage.html'

          })

          .state('homePage', {

            url: '/',
            templateUrl: 'touchbase/app/homePage/homePage.html'


      })

          .state('whoPage',{

              url: '/whoPage',
              templateUrl: 'touchbase/app/whoPage/whoPage.html'



          })




}]);
