'use strict';

angular.module('happyprezApp')
  .directive('slidedeck', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the slidedeck directive');
      }
    };
  });
