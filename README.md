# orgdpes

[![Greenkeeper badge](https://badges.greenkeeper.io/retrohacker/orgdeps.svg)](https://greenkeeper.io/)

Return all of the npm dependencies of a GitHub organization's public repositories

# Installation

`npm install -g orgdeps`

# Usage


`orgdeps`

```

orgdeps - List all of the direct deps of Node.js projects in a GitHub org

  USAGE: orgdeps --org ORG

    org ORG - Required. Name of the GitHub organization to query

```

All log messages are printed to `stderr` so you can still follow the status of the tool while piping the results to unix tools

Output is in the form:

`COUNT MODULE` i.e. `15 bole`

`orgdeps --org storj | sort -n`

```
[ LOG ] Fetching org repo list from https://api.github.com/orgs/storj/repos
[ LOG ] Cloning pushy-cat
[ LOG ] Cloning storjshare-gui
[ LOG ] Cloning bitcointalkbot
[ LOG ] Cloning bridge-gui
[ LOG ] Cloning autobin
[ LOG ] Cloning bridge
[ LOG ] Cloning core
[ LOG ] Cloning storj.io
[ LOG ] Cloning pullypusher
[ LOG ] Cloning statusify
[ LOG ] Cloning storjshare-cli
[ LOG ] Cloning data-api
[ LOG ] Cloning stat-generator
[ LOG ] Cloning abacus
[ LOG ] Cloning storj-automation
[ LOG ] Cloning telemetry-reporter
[ LOG ] Cloning chef-storj
[ LOG ] Cloning beach-size
[ LOG ] Cloning azure-quickstart-templates
[ LOG ] Cloning sips
[ LOG ] Cloning reckoner
[ LOG ] Cloning storj-python-sdk
[ LOG ] Cloned pushy-cat, 21 remaining...
[ LOG ] Cloned storjshare-gui, 20 remaining...
[ LOG ] Cloned bitcointalkbot, 19 remaining...
[ LOG ] Cloned bridge-gui, 18 remaining...
[ LOG ] Cloned autobin, 17 remaining...
[ LOG ] Cloned bridge, 16 remaining...
[ LOG ] Cloned core, 15 remaining...
[ LOG ] Cloned storj.io, 14 remaining...
[ LOG ] Cloned pullypusher, 13 remaining...
[ LOG ] Cloned statusify, 12 remaining...
[ LOG ] Cloned storjshare-cli, 11 remaining...
[ LOG ] Cloned data-api, 10 remaining...
[ LOG ] Cloned stat-generator, 9 remaining...
[ LOG ] Cloned abacus, 8 remaining...
[ LOG ] Cloned storj-automation, 7 remaining...
[ LOG ] Cloned telemetry-reporter, 6 remaining...
[ LOG ] Cloned chef-storj, 5 remaining...
[ LOG ] Cloned beach-size, 4 remaining...
[ LOG ] Cloned azure-quickstart-templates, 3 remaining...
[ LOG ] Cloned sips, 2 remaining...
[ LOG ] Cloned reckoner, 1 remaining...
[ LOG ] Cloned storj-python-sdk, 0 remaining...
1 adm-zip
1 amqplib
1 apollo-client
1 apollo-server
1 appdmg
1 applescript
1 asar
1 assets-webpack-plugin
1 autoprefixer-loader
1 babel
1 babel-cli
1 babel-plugin-typecheck
1 babel-polyfill
1 babel-preset-react
1 basic-auth
1 better-npm-run
1 bootstrap
1 bootstrap-sass
1 bootstrap-sass-loader
1 browserify
1 bs58
1 camelcase
1 clean-webpack-plugin
1 compression
1 concat-stream
1 connect-mongo
1 cron
1 css-loader
1 csv-write-stream
1 debug
1 del
1 du
1 electron-mocha
1 electron-prebuilt
1 elliptic
1 escape-string-regexp
1 eslint-loader
1 eslint-plugin-jsx-a11y
1 express-graphql
1 extract-text-webpack-plugin
1 fd-diskspace
1 file-loader
1 flatten-packages
1 flushwritable
1 fs
1 fs-extra
1 fs-jetpack
1 gaze
1 gh-pages
1 glob
1 graphql-tag
1 grunt
1 grunt-contrib-jshint
1 grunt-jsbeautifier
1 grunt-jscs
1 grunt-mocha-cli
1 gulp-babel
1 gulp-less
1 gulp-sourcemaps
1 handlebars
1 hat
1 http
1 ip
1 jquery
1 kad
1 kad-quasar
1 karma
1 karma-cli
1 karma-mocha
1 karma-mocha-reporter
1 karma-phantomjs-launcher
1 karma-sourcemap-loader
1 karma-webpack
1 levelup
1 load-grunt-tasks
1 lodash.merge
1 mime
1 mime-db
1 mocha.parallel
1 mongodb
1 mongoose-types
1 mtree
1 multireducer
1 nat-upnp
1 ncp
1 nightwatch
1 nodemailer
1 node-sass
1 node-tar.gz
1 ntp-client
1 path
1 pem
1 phantomjs
1 phantomjs-polyfill
1 portfinder
1 pretty-error
1 q
1 rcedit
1 react
1 react-apollo
1 react-bootstrap
1 react-dom
1 react-helmet
1 react-hot-loader
1 react-loader
1 react-redux
1 react-router
1 react-transform-catch-errors
1 redbox-react
1 redux
1 redux-devtools
1 redux-devtools-dock-monitor
1 redux-devtools-log-monitor
1 redux-form
1 replace
1 restler
1 rsvp
1 sass-loader
1 serve-favicon
1 shebang-loader
1 skeemas
1 source-map-support
1 strip-loader
1 style-loader
1 superagent
1 tmp
1 tree-kill
1 unirest
1 untildify
1 url-loader
1 vue
1 webpack-dev-middleware
1 webpack-dev-server
1 webpack-hot-middleware
1 winreg
1 ws
1 yamljs
1 yargs
2 babel-core
2 babel-eslint
2 babel-loader
2 babel-plugin-transform-decorators-legacy
2 babel-preset-es2015
2 babel-preset-stage-0
2 elasticsearch
2 eslint-config-airbnb
2 eslint-plugin-import
2 eslint-plugin-react
2 graphql
2 gulp
2 gulp-util
2 ink-docstrap
2 jsdoc
2 json-loader
2 knuth-shuffle
2 lodash-keyarrange
2 memdown
2 mkdirp
2 ms
2 myspeed
2 noisegen
2 prompt
2 readable-stream
2 rimraf
2 semver
2 storj-telemetry-reporter
2 through
2 webpack
2 winston
3 bitcore-ecies
3 bitcore-lib
3 bitcore-message
3 body-parser
3 colors
3 commander
3 cors
3 eslint-config-defaults
3 eslint-plugin-filenames
3 jsen
3 jshint
3 leveldown
3 lodash
3 merge
3 mongoose
3 node-uuid
3 supertest
4 config
4 json-stable-stringify
4 kad-logger-json
4 proxyquire
4 sinon
5 coveralls
5 eslint
5 express
5 istanbul
5 request
5 storj
7 chai
8 async
9 mocha
```
