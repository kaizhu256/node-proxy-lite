#!/usr/bin/env node
/*jslint
  bitwise: true, browser: true,
  indent: 2,
  maxerr: 8,
  node: true, nomen: true,
  regexp: true,
  stupid: true,
  todo: true
*/
// declare module vars
var exports, required, state, stateRestore;
stateRestore = function (state2) {
  /*
    this function is used by testMock to restore the local state var
  */
  'use strict';
  state = state2;
};



(function submoduleMainNodejs() {
  /*
    this nodejs submodule exports the main api
  */
  'use strict';
  var local = {
    _name: 'main.submoduleMainNodejs',

    _init: function () {
      /*
        this function inits the submodule
      */
      // init export object
      exports = module.exports = require(__dirname + '/utility2.js');
      // export __dirname
      exports.__dirname = __dirname;
      // export __filename
      exports.__filename = __filename;
      // init this submodule
      exports.initSubmodule(local);
      // init required object
      required = exports.required;
      // init state object
      state = exports.state;
    },

    'serverPathHandlerDict_/': function (request, response, next) {
      var finished, modeIo, onEventIo, options, proxyResponse, timerTimeout;
      modeIo = 0;
      onEventIo = function (error) {
        modeIo = error instanceof Error ? -1 : modeIo + 1;
        switch (modeIo) {
        case 1:
          // serve main page
          if (request.urlPathNormalized === '/') {
            exports.serverRespondData(response, 200, 'text/html', exports.textFormat(
              state.fileDict['/public/main.html'].data,
              { stateBrowserJson: state.stateBrowserJson }
            ));
            return;
          }
          // init url options
          options = required.url.parse(request.url.replace((/^\//), ''));
          if (options.protocol) {
            // set timerTimeout
            timerTimeout = exports.onEventTimeout(
              onEventIo,
              state.timeoutDefault,
              'proxy ' + request.url
            );
            (options.protocol === 'https:' ? required.https : required.http)
              .request(options, onEventIo)
              // handle error event
              .on('error', onEventIo)
              .end();
            return;
          }
          // handle invalid url case
          modeIo = -2;
          onEventIo();
          break;
        case 2:
          // pipe proxy response back to request
          proxyResponse = error;
          proxyResponse.pipe(response).on('error', onEventIo);
          break;
        default:
          // ignore error / data if already finished
          if (finished) {
            return;
          }
          finished = true;
          // cleanup timerTimeout
          clearTimeout(timerTimeout);
          // cleanup proxyResponse socket
          if (proxyResponse) {
            proxyResponse.destroy();
          }
          next(error);
        }
      };
      onEventIo();
    },

    '_serverPathHandlerDict_/_default_test': function (onEventError) {
      /*
        this function tests serverPathHandlerDict_/'s default handing behavior
      */
      exports.ajax({
        url: state.localhost + '/' + state.localhost + '/test/hello.json'
      }, function (error, data) {
        exports.testTryCatch(function () {
          // validate no error occurred
          exports.assert(!error, error);
          // validate data
          exports.assert(data === '"hello"', data);
          onEventError();
        }, onEventError);
      });
    },

    '_serverPathHandlerDict_/_invalidUrl_test': function (onEventError) {
      /*
        this function tests serverPathHandlerDict_/'s invalid url handing behavior
      */
      exports.ajax({
        url: '/invalid/url'
      }, function (error, data) {
        exports.testTryCatch(function () {
          // validate error occurred
          exports.assert(error instanceof Error, error);
          // validate data
          exports.assert(data === '404 Not Found', data);
          onEventError();
        }, onEventError);
      });
    }

  };
  local._init();
}());
