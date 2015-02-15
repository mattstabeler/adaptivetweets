'use strict';

/**
 * @ngdoc service
 * @name adaptivetweetsApp.tweetService
 * @description
 * # tweetService
 * Factory in the adaptivetweetsApp.
 */
angular.module('adaptivetweetsApp')
  .factory('tweetService', ['$q', 'Tweet', function ($q, Tweet) {
      // for now, keep a list of tweets in memory
      var knownTweets = [];
      // var knownTweets = [{'created_at':'2012-12-07T16:57:43Z','followers':10,'id':18,'message':'@coke_lvr ur wrong dude','sentiment':-0.3,'updated_at':'2012-12-07T16:57:43Z','user_handle':'@coke_h8r'},{'created_at':'2012-09-27T16:11:44Z','followers':345,'id':4,'message':'Who likes coca-cola?','sentiment':0.0,'updated_at':'2012-09-27T16:11:44Z','user_handle':'@questionnr'}];

      var api = {};

      var processIncomingTweets = function(incomingTweets){
        var newTweets = [];
        angular.forEach(incomingTweets, function(tweet){

          var existingTweet = tweetExists(tweet);

          if(!existingTweet){
            // TODO: some clever parsing of keywords before adding to array
            tweet.count = 1;
            tweet.words = tweet.message.split(' ');
            knownTweets.push(tweet);
            newTweets.push(tweet);
          }else{
            existingTweet.count +=1;
          }
        });
        return newTweets;
      };

      var tweetExists = function(tweet){
        for (var i = 0; i < knownTweets.length; i++) {
          if (knownTweets[i].id === tweet.id){
            return knownTweets[i];
          }
        }
        return false;
      };

      api.getTweets = function(){
        return knownTweets;
      };

      api.loadMoreTweets = function(){
        var loadDeferrred = $q.defer(); 

        Tweet.loadTweets().$promise.then(function(success){

          var newTweets = processIncomingTweets(success);
          loadDeferrred.resolve(newTweets);
        }, function(error){
          // TODO: handle error
          console.error(error);
          loadDeferrred.reject(error);
        });

        return loadDeferrred.promise;
      };
  
      return api;
  }])
  .factory('Tweet', ['$resource', function($resource){
    var url = 'http://adaptive-test-api.herokuapp.com/tweets.json';
    var paramDefaults = {};
    var actions = {
      loadTweets: {
        method: 'GET',
        isArray: true
      }
    };
    return $resource(url, paramDefaults, actions);
  }]);