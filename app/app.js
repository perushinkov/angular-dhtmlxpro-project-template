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
  .controller('AppController', ['$state', 'Model' ,function ($state, Model) {
    //Factory-driven configuration that can't take place in the config section
    var cfgVar = Model.getSomeConfigVar();
    //DoConfigStuff with cfgVar!
    //Starting the app's initial state
    $state.go('root');
  }]);
