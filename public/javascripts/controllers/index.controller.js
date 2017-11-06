(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('mainController',mainController);

  mainController.$inject = ['$scope'];
  function mainController($scope) {
    var vm = this;

    activate();

    ////////////////

    function activate() {
      vm.title = "titulo de index";
    }
  }
})();