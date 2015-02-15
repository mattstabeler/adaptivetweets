'use strict';

/**
 * @ngdoc function
 * @name adaptivetweetsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adaptivetweetsApp
 */
angular.module('adaptivetweetsApp')
  .controller('MainCtrl', ['$scope', '$filter', 'tweetService', 'initialTweets', function ($scope, $filter, tweetService, initialTweets) {
    $scope.tweets = initialTweets;

    $scope.loading = false;
    $scope.lastError = undefined;
    $scope.lastMessage = undefined;
    $scope.userHandleFilter = undefined;
    $scope.showRaw = false;

    var keywords = ['coke', 'coca-cola', 'diet cola'];

    $scope.getTweets = function(){
    	if($scope.userHandleFilter){
    		var filter = { 'user_handle' : $scope.userHandleFilter};
    		return $filter('filter')($scope.tweets, filter);
    	}else{
    		return $scope.tweets;
    	}
    };

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

    $scope.hasKeyword = function(tweet){
    	// very painful way of checking a match
    	for (var i = 0; i < keywords.length; i++) {
    		if(tweet.message.indexOf(keywords[i]) > -1){
    			return true;
    		}
    	}
    	return false;
    };

    $scope.filterUser = function(handle){
    	$scope.userHandleFilter = handle;
    };

    $scope.clearFilter = function(){
    	$scope.userHandleFilter = undefined;
    };

    $scope.toggleShowRaw = function(){
    	$scope.showRaw = !$scope.showRaw;
    };

  }]);
