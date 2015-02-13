'use strict';

/**
 * @ngdoc function
 * @name adaptivetweetsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adaptivetweetsApp
 */
angular.module('adaptivetweetsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tweets = [{'created_at':'2012-12-07T16:57:43Z','followers':10,'id':18,'message':'@coke_lvr ur wrong dude','sentiment':-0.3,'updated_at':'2012-12-07T16:57:43Z','user_handle':'@coke_h8r'},{'created_at':'2012-09-27T16:11:44Z','followers':345,'id':4,'message':'Who likes coca-cola?','sentiment':0.0,'updated_at':'2012-09-27T16:11:44Z','user_handle':'@questionnr'}];
  });
