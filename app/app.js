'use strict';

/**
 * @name ng-dhx-template
 * Main module of the application.
 */
angular
  .module('app', [
    'ui.router',
    'dhxDirectives'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('root', {
        url: "/",
        templateUrl: "root/root.html",
        controller : 'RootController'
      });
  })
  .controller('AppController', ['$state', 'DhxUtils', 'Model' ,function ($state, DhxUtils, Model) {
    //Factory-driven configuration that can't take place in the config section
    DhxUtils.setImagePath(Model.getDhxImagePath());
    //Starting the app's initial state
    $state.go('root');
  }]);
