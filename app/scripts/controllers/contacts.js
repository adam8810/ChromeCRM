'use strict';

angular.module('maryKayApp')
    .controller('ContactsCtrl', function ($scope, $location) {
        var contacts = [
            {id: 1, firstname: 'Adam', lastname: 'Booth'},
            {id: 2, firstname: 'Mallory', lastname: 'Booth'}
        ];

//        chrome.storage.sync.set({
//            contacts: contacts
//        });
//
//        chrome.storage.sync.get('contacts', function(d) {
//            console.log(d);
//        })

        chrome.storage.onChanged.addListener(function (changes, namespace) {
            for (var key in changes) {
                var storageChange = changes[key];

                console.log(
                    key, namespace,
                    storageChange.oldValue,
                    storageChange.newValue
                );
            }
        })

        $scope.contacts = contacts;

        $scope.viewContact = function (id) {

            $scope.currentContactID = id;
            $location.path('/contacts');
        }
    });
