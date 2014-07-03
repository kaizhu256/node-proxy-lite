proxy-lite
==========
lightweight nodejs proxy server with no external dependencies

## build status
[![saucelabs.com selenium test status](https://saucelabs.com/browser-matrix/sclb01-proxy-lite.svg)](https://saucelabs.com/u/sclb01-proxy-lite)

 test server | test report | coverage report | build log | build artifact
:-----------:|:-----------:|:---------------:|:---------:|:--------------:
[![heroku.com test server](https://kaizhu256.github.io/public/heroku-logo-light-88x31.png)](https://hrku01-proxy-lite.herokuapp.com/test/test.html) | [![test report](https://kaizhu256.github.io/node-proxy-lite-data/build.travis-ci.org/latest.unstable/test-report.badge.svg)](https://kaizhu256.github.io/node-proxy-lite-data/build.travis-ci.org/latest.unstable/test-report.html) | [![istanbul coverage report](https://kaizhu256.github.io/node-proxy-lite-data/build.travis-ci.org/latest.unstable/coverage-report/coverage-report.badge.svg)](https://kaizhu256.github.io/node-proxy-lite-data/build.travis-ci.org/latest.unstable/coverage-report/node-proxy-lite/index.html) | [![travis.ci-org build status](https://api.travis-ci.org/kaizhu256/node-proxy-lite.svg?branch=unstable)](https://travis-ci.org/kaizhu256/node-proxy-lite?branch=unstable) | [![build artifacts](https://kaizhu256.github.io/public/glyphicons_free/glyphicons/png/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-proxy-lite-data/tree/gh-pages/build.travis-ci.org/latest.unstable)

## quickstart
```
npm install proxy-lite
cd node_modules/proxy-lite
## start proxy-lite server on port 8080
npm start --server-port=8080
```

## library usage example
```
/* example.js */
/*jslint indent:2, node: true, stupid: true*/
(function () {
  'use strict';
  // var fs, jslint_lite;
  // /* require fs */
  // fs = require('fs');
  // /* require jslint_lite */
  // jslint_lite = require('./node-proxy-lite.js');
  // jslint_lite.jslint(fs.readFileSync('example.js', 'utf8'), 'example.js');
}());
```

## run npm test
```
npm install proxy-lite
cd node_modules/proxy-lite
## npm install dev dependencies
npm install
## run npm test
npm test
```

## todo
- redirect main page to test.html
- fix test report merge in testing published npm package
- automate phantomjs and slimerjs headless browser testing
- automate saucelabs testing in build
- flesh out proxy server code

## changelog
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
