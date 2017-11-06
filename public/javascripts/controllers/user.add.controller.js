(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('userAddController', userAddController);

  userAddController.$inject = ['$scope', '$http', '$location', 'alertFactory'];
  function userAddController($scope, $http, $location, alertFactory) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() {
      vm.title = 'Agregar un nuevo usuario';
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
      vm.role = vm.role_options[0].value;
      vm.saveUser = saveUser;

      
    }

    function saveUser() {
      let obj = {
        name: vm.name,
        email: vm.email,
        password: vm.pass,
        role: vm.role
      }

      $http.post('/api/users/add', { user: obj })
      .then(response => {
        if( response.status == 200 ) {
          alertFactory.showAlert('El usuario fue guardado correctamente', 'success');
        }
      });
    }
  }
})();