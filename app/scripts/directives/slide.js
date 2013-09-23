'use strict';

angular.module('happyprezApp')
  .directive('slide', function () {
    return {
      template: '<div ng-transclude></div>',
      replace: true,
      transclude: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the slide directive');
      }
    };
  });
