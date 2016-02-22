/**
 * Created by Emanuil on 22/01/2016.
 */
angular.module('app')
  .controller('RootController', [
    '$scope', 'Model', '$state',
    function ($scope) {
      $scope.msg = "Some controller-bound message here!";
    }
  ]);
