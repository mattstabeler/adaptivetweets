'use strict';

describe('Service: tweetService', function () {

  // load the service's module
  beforeEach(module('adaptivetweetsApp'));

  // instantiate service
  var tweetService;
  beforeEach(inject(function (_tweetService_) {
    tweetService = _tweetService_;
  }));

  it('should provide a method to get the list of tweets', function () {
    expect(tweetService.getTweets).toBeDefined();
  });


  it('should provide a method to load more tweets', function () {
    expect(tweetService.loadMoreTweets).toBeDefined();
  });

  it('should do an http req when loading more tweets', function () {
    // expect a URL to have been called.... TODO
  });

});
