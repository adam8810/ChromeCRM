'use strict';

angular.module('maryKayApp')
  .directive('amNavigateTo', function () {
    return {
      replace:true,
      restrict: 'EA',
      controller: function($scope, $location) {
          $scope.goToContacts = function() {
              $location.path('/contacts');
          }
      },
      templateUrl: 'templates/directive-back.html'
    };
  });
