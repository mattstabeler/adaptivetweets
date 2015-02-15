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
    $scope.lastMessage = undefined;

    $scope.loadMoreTweets = function(){
    	$scope.loading = true;
    	$scope.lastError = undefined;
    	$scope.lastMessage = undefined;

    	tweetService.loadMoreTweets().then(function(newTweets){
    		$scope.lastMessage = 'Loaded ' + newTweets.length + ' new messages';
    		$scope.tweets = tweetService.getTweets();
    	}, function(error){
    		$scope.lastError = error.data.error.message;
    	}).finally(function(){
    		$scope.loading = false;
    	});
    };
  }]);
