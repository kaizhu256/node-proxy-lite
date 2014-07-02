/*jslint indent:2, node: true, nomen: true, regexp: true, stupid: true*/
/*global required, state*/
/* declare module vars */
var exports;



(function subModuleProxyLiteNodejs() {
  /*
    this nodejs sub-module exports the proxy-lite api
  */
  'use strict';
  var local = {
    _name: 'proxy-lite.subModuleProxyLiteNodejs',

    _init: function () {
      /*
        this function inits the module
      */
      /* init build.js */
      exports = module.exports = require('./build.js');
      /* init local object */
      exports.initLocal(local);
      /* init cli */
      local._initCli(process.argv);
    },

    _initCli: function () {
      /*
        this function inits the cli
      */
      if (__dirname !== process.cwd()) {
        return;
      }
    },

    __initCli_default_test: function (onEventError) {
      /*
        this function tests _initCli's default handling behavior
      */
      onEventError();
    }

  };
  local._init();
}());
