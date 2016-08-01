(function() {
  'use strict';

  angular.module('dimApp')
    .component('dimSimpleItem', {
      bindings: { item: '<itemData' },
      templateUrl: 'dimSimpleItem.html'
    });
})();
