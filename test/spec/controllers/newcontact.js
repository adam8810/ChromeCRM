'use strict';

describe('Controller: NewcontactCtrl', function () {

  // load the controller's module
  beforeEach(module('maryKayApp'));

  var NewcontactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewcontactCtrl = $controller('NewcontactCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
