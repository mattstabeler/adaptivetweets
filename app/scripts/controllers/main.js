'use strict';

/**
 * @ngdoc function
 * @name adaptivetweetsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adaptivetweetsApp
 */
angular.module('adaptivetweetsApp')
  .controller('MainCtrl', ['$scope', 'tweetService', 'initialTweets', function ($scope, tweetService, initialTweets) {
    $scope.tweets = initialTweets;

    $scope.loading = false;
    $scope.lastError = undefined;

    $scope.loadMoreTweets = function(){
    	$scope.loading = true;
    	$scope.lastError = undefined;
    	tweetService.loadMoreTweets().then(function(newTweets){
    		console.log('Loaded ' + newTweets.length + ' new tweets');
    		$scope.tweets = tweetService.getTweets();
    	}, function(error){
    		$scope.lastError = error.data.error.message;
    	});
    };
  }]);
