// 'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    $scope.test = function () {


    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });
  };
    $scope.test();

    $scope.addMessage = function (message) {

      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          $scope.messages = response.data;
          $scope.newMessage = "";
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
