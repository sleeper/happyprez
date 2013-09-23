'use strict';

describe('Directive: slide', function () {

  // load the directive's module
  beforeEach(module('happyprezApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slide> <div id="transcluded">??</div></slide>');
    element = $compile(element)(scope);
    console.log(element);
    expect(element.find('div').text()).toBe('??');
  }));
});
