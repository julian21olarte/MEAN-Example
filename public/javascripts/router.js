'use strict';
angular.module('myApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/main',
        controller: 'mainController',
        controllerAs: 'main'
      })
      .when('/users', {
        templateUrl: '/users',
        controller: 'usersController',
        controllerAs: 'users'
      })
      .when('/users/view/:id', {
        templateUrl: '/user',
        controller: 'userController',
        controllerAs: 'user'
      })
      .when('/users/add', {
        templateUrl: '/userAdd',
        controller: 'userAddController',
        controllerAs: 'user'
      })
      .when('/users/edit/:id', {
        templateUrl: '/userEdit',
        controller: 'userEditController',
        controllerAs: 'user'
      })
      .when('/about', {
        templateUrl: '/about',
        controller: 'aboutController',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);