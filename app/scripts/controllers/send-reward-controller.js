'use strict';

var sc = angular.module('stellarClient');

sc.controller('SendRewardCtrl', function ($scope, session) {
  $scope.index = 3;
  $scope.reward = $scope.rewards[$scope.index];

  var action = $scope.reward.action;
  action.message = 'Learning how to send digital money is one small click for you, one giant click for mankind.';
  action.template = 'templates/send-stellar.html';

  action.start = function () {
    $rootScope.tab = 'send';
    scrollTo(scrollX, 188);
    // TODO: Show send tutorial.
  };

  action.success = function () {
    $scope.rewards[$scope.index].status = "sent";
    $scope.computeRewardProgress();
  };
});