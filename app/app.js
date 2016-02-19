'use strict';

/**
 * @name ng-dhx-template
 * Main module of the application.
 */
angular
  .module('app', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('root', {
        url: "/",
        templateUrl: "root/root.html",
        controller : 'RootController'
      });
  })
  .controller('AppController', ['$state' ,function ($state) {
    $state.go('root');
  }]);
