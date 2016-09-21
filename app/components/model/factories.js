"use strict";
/**
 * Created by Emanuil
 */

angular.module('app').factory('Model', [function () {
  var _config = {
    someConfigVar: '<someConfigValue>'
  };

  var getSomeConfigVar = function () {
    return _config.someConfigVar;
  };

  return {
    getSomeConfigVar: getSomeConfigVar
  };
}]);
