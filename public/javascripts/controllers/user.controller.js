(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('userController', userController);

  userController.$inject = ['$scope', '$http', '$routeParams'];
  function userController($scope, $http, $routeParams) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() {
      vm.title = 'Detalle de usuario';
      let _id = $routeParams.id;
      $http.get(`/api/users/view/${_id}`)
      .then(function(response) {
          vm.userInfo = response.data.user;
          console.log('usuario:  '+vm.userInfo);
      });
    }
  }
})();