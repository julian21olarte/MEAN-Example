(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('aboutController', aboutController);

  aboutController.$inject = ['$scope', '$http'];
  function aboutController($scope, $http) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { 
      vm.title = 'vista de About'
    }
  }
})();