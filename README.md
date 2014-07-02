proxy
=====
nodejs jslint module with no external package dependencies

## build status
[![saucelabs.com selenium test status](https://saucelabs.com/browser-matrix/proxy-kaizhu256.svg)](https://saucelabs.com/u/proxy-kaizhu256)

 test server | test report | coverage report | build log | build artifact
:-----------:|:-----------:|:---------------:|:---------:|:--------------:
[![heroku.com test server](https://d1lpkba4w1baqt.cloudfront.net/heroku-logo-light-88x31.png)](https://node-proxy-heroku.herokuapp.com/test/test.html) | [![test report](https://kaizhu256.github.io/node-proxy-data/build.travis-ci.org/latest.unstable/test-report.badge.svg)](https://kaizhu256.github.io/node-proxy-data/build.travis-ci.org/latest.unstable/test-report.html) | [![istanbul coverage report](https://kaizhu256.github.io/node-proxy-data/build.travis-ci.org/latest.unstable/coverage-report/coverage-report.badge.svg)](https://kaizhu256.github.io/node-proxy-data/build.travis-ci.org/latest.unstable/coverage-report/node-proxy/index.html) | [![travis.ci-org build status](https://api.travis-ci.org/kaizhu256/node-proxy.svg?branch=unstable)](https://travis-ci.org/kaizhu256/node-proxy?branch=unstable) | [![build artifacts](https://kaizhu256.github.io/public/glyphicons_free/glyphicons/png/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-proxy-data/tree/gh-pages/build.travis-ci.org/latest.unstable)

## quickstart
```
npm install -g proxy
proxy foo.js
```

## library usage example
```
/* example.js */
/*jslint indent:2, node: true, stupid: true*/
(function () {
  'use strict';
  var fs, jslint_lite;
  /* require fs */
  fs = require('fs');
  /* require jslint_lite */
  jslint_lite = require('./proxy.js');
  jslint_lite.jslint(fs.readFileSync('example.js', 'utf8'), 'example.js');
}());
```

## todo
- increase code coverage

## changelog
#### 2014.7.1
- merge .git-config and .gitignore into build.data
- add html test report
- generate coverage badge during build
- add test
- add code coverage

#### 2014.6.23
- initial commit
