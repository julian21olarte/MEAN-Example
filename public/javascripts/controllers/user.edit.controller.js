(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('userEditController', userEditController);

  userEditController.$inject = ['$scope', '$http', '$routeParams', 'alertFactory'];
  function userEditController($scope, $http, $routeParams, alertFactory) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { 
      vm.title = 'Editar usuario';
      vm.role_options = [
        {
          value: 'ROLE_USER', 
          name: 'User'
        },
        {
          value: 'ROLE_ADMIN', 
          name: 'Admin'
        }
      ];

      let _id = $routeParams.id;
      $http.get(`/api/users/view/${_id}`)
      .then(function(response) {
          vm.user = response.data.user;
          vm.role = vm.user.role;
          console.log(vm.user);
      });

      vm.updateUser = updateUser;
    }


    function updateUser() {
      let obj = {
        name: vm.user.name,
        email: vm.user.email,
        password: vm.user.password,
        role: vm.user.role
      };
      let _id = $routeParams.id;

      $http.put(`/api/users/edit/${_id}`, {user: obj, userId: _id})
      .then(response => {
        if( response.status == 200 ) {
          alertFactory.showAlert('Usuario actualizado correctamente!', 'success');
        }
      });
    }
  }
})();