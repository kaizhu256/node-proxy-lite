#!/usr/bin/env node
/*jslint bitwise: true, browser: true, indent:2, node: true, nomen: true, regexp: true, stupid: true*/
/* declare module vars */
var exports, required, state;



(function subModuleProxyLiteNodejs() {
  /*
    this nodejs sub-module exports the proxy-lite api
  */
  'use strict';
  var local = {
    _name: 'proxy-lite.subModuleProxyLiteNodejs',

    _init: function () {
      /*
        this function inits the sub-module
      */
      /* init utility.js */
      exports = module.exports = require(__dirname + '/utility.js');
      /* init local object */
      exports.initLocal(local);
      /* init required object */
      required = exports.required;
      /* init state object */
      state = exports.state;
      state.__filename = __filename;
    }

  };
  local._init();
}());
