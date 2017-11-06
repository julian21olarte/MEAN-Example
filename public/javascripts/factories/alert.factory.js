(function() {
  'use strict';

  angular
    .module('myApp')
    .factory('alertFactory', alertFactory);

  alertFactory.$inject = [];
  function alertFactory() {
    var service = {
      showAlert:showAlert
    };
    
    return service;

    ////////////////
    function showAlert(message, status) { 
      let alertElem = angular.element('.alert');
      alertElem.addClass(`in alert-${status}`)
        .find('strong')
        .text(message);  
      alertElem.show('slow');
      
      setTimeout(() => {
        alertElem
          .addClass('out')
          .removeClass(`in alert-${status}`)
          .hide('slow');
      }, 5000);
    }
  }
})();