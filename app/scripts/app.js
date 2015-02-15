'use strict';

/**
 * @ngdoc overview
 * @name adaptivetweetsApp
 * @description
 * # adaptivetweetsApp
 *
 * Main module of the application.
 */
angular
  .module('adaptivetweetsApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          initialTweets: function(tweetService){
            return tweetService.getTweets();
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
