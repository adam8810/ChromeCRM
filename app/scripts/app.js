'use strict';

angular.module('maryKayApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/newContact', {
        templateUrl: 'views/newcontact.html',
        controller: 'NewcontactCtrl'
      })
      .otherwise({
        redirectTo: '/newContact'
      });
  });
