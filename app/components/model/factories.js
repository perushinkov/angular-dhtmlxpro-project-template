"use strict";
/**
 * Created by Emanuil
 */

angular.module('app').factory('Model', [function () {

  var doSomething = function () {
    return "Values";
  };

  return {
    doSomething: doSomething
  };
}]);
