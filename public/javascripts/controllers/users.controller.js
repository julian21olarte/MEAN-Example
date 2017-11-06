(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('usersController', usersController);

  usersController.$inject = ['$scope', '$http', 'alertFactory'];
  function usersController($scope, $http, alertFactory) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { 
      vm.title = 'usuarios'
      $http.get("/api/users")
        .then(function(response) {
            vm.users = response.data.users;
            console.log(vm.users);
        });
        vm.getInfo = showUserInfo
        vm.deleteUser = deleteUser;
    }

    function showUserInfo( user ) {
      vm.userInfo = user;
    }

    function deleteUser(userId) {
      $http.delete(`/api/users/delete/${userId}`)
      .then(response => {
        if(response.status == 200) {
          alertFactory.showAlert('Usuario eliminado correctamente.', 'danger');
          activate();
        }
      });
    }
  }
})();