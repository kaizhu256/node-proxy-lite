proxy-lite
==========
lightweight nodejs proxy server with no external dependencies

[![heroku.com test server](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/beta/test-report.screenshot.heroku.png)](https://hrku01-proxy-lite-beta.herokuapp.com/?modeTest=1)
<br><br><br><br>



## build status [![travis.ci-org build status](https://api.travis-ci.org/kaizhu256/node-proxy-lite.svg)](https://travis-ci.org/kaizhu256/node-proxy-lite)

[![build commit status](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/build.badge.svg)](https://travis-ci.org/kaizhu256/node-proxy-lite)

[![saucelabs.com selenium test status](https://saucelabs.com/browser-matrix/sclb01-proxy-lite.svg)](https://saucelabs.com/u/sclb01-proxy-lite)

 git branch | test server | test report | coverage report | build artifact
:----------:|:-----------:|:-----------:|:---------------:|:--------------:
[master](https://github.com/kaizhu256/node-proxy-lite/tree/master) | [![heroku.com test server](https://kaizhu256.github.io/public/heroku-logo-light-88x31.png)](https://hrku01-proxy-lite-master.herokuapp.com/?modeTest=1) | [![test-report](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/master/test-report.badge.svg)](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/master/test-report.html) | [![istanbul coverage report](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/master/coverage-report.badge.svg)](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/master/coverage-report.html/node-proxy-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/public/glyphicons_free/glyphicons/png/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-proxy-lite/tree/gh-pages/build.travis-ci.org/master)
[beta](https://github.com/kaizhu256/node-proxy-lite/tree/beta) | [![heroku.com test server](https://kaizhu256.github.io/public/heroku-logo-light-88x31.png)](https://hrku01-proxy-lite-beta.herokuapp.com/?modeTest=1) | [![test-report](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/beta/test-report.badge.svg)](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/beta/test-report.html) | [![istanbul coverage report](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/beta/coverage-report.badge.svg)](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/beta/coverage-report.html/node-proxy-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/public/glyphicons_free/glyphicons/png/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-proxy-lite/tree/gh-pages/build.travis-ci.org/beta)
[alpha](https://github.com/kaizhu256/node-proxy-lite/tree/alpha) | [![heroku.com test server](https://kaizhu256.github.io/public/heroku-logo-light-88x31.png)](https://hrku01-proxy-lite-alpha.herokuapp.com/?modeTest=1) | [![test-report](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/alpha/test-report.badge.svg)](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/alpha/test-report.html) | [![istanbul coverage report](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/alpha/coverage-report.badge.svg)](https://kaizhu256.github.io/node-proxy-lite/build.travis-ci.org/alpha/coverage-report.html/node-proxy-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/public/glyphicons_free/glyphicons/png/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-proxy-lite/tree/gh-pages/build.travis-ci.org/alpha)



## quickstart
```
## npm install proxy-lite
npm install proxy-lite
cd node_modules/proxy-lite
## start proxy server on port 8080
npm start --server-port=8080
```



## library usage example
```
// example.js
/*jslint
  bitwise: true,
  indent:2,
  node: true
*/
(function () {
  'use strict';
  var port, server, utility2;
  // require utility2 module
  try {
    utility2 = require('utility2');
  } catch (error) {
    utility2 = require('./main.js');
  }
  // create random port in the inclusive range 0x8000 - 0xffff
  port = (Math.random() * 0xffff) | 0x8000;
  console.log('proxy test server starting on random port ' + port);
  // init server with proxy middleware
  server = require('http').createServer(function (request, response) {
    utility2.serverMiddleware(request, response, function (error) {
      utility2.serverRespondDefault(response, error ? 500 : 404, error);
    });
  });
  // set server to listen on the specified port
  server.listen(port, function () {
    console.log('proxy test server started on port ' + port);
    setTimeout(function () {
      server.close();
      console.log('proxy test server closed after 1 second');
    }, 1000);
  });
}());
```



## run npm test
```
npm test
```



## description of files
- .travis.yml
  - travis-ci config file
- README.md
  - readme file
- example.js
  - example nodejs script demonstrating how to use this app
- main.data
  - data file containing embedded resources specific to this app
- main.js
  - this app's main program / library
- package.json
  - npm config file
- utility2.data
  - data file containing embedded resources used by travis-ci
- utility2.js
  - nodejs build script used by travis-ci
- utility2.sh
  - shell build script used by travis-ci



## todo
- flesh out proxy server code

## changelog
#### 2014.8.27
- update to latest utility2 build code

#### 2014.7.2
- autoload package.json
- auto-reload utility2.data
- add --repl-mode
- fix test report time
- automate heroku deployment in build
- add test report badge
- fix npm build
- split subModuleBuildNodejs into subModuleBuildShared and subModuleBuildNodejs
- split node-proxy-lite.js into node-proxy-lite.js and utility.js

#### 2014.7.1
- initial commit
