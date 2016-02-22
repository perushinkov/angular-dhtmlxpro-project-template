"use strict";
/**
 * Created by Emanuil
 */

angular.module('app').factory('Model', [function () {
  var _config = {
    dhtmlxImgPath: 'libs/dhtmlx/codebase/imgs/dhxtree_skyblue/'
  };

  var getDhxImagePath = function () {
    return _config.dhtmlxImgPath;
  };

  return {
    getDhxImagePath: getDhxImagePath
  };
}]);
