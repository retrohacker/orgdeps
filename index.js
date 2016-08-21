const request = require('request')
const git = require('simple-git')(__dirname)
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const glob = require('glob')
require('colors').enabled = true
const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const os = require('os')
const temp_dir = path.join(os.tmpdir(), 'temp')

process.on('uncaughtException', cleanup)
process.on('exit', cleanup)
process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)

function cleanup () {
  rimraf.sync(temp_dir)
  process.exit()
}

function help () {
  console.log(function () {
/*

orgdeps - List all of the direct deps of Node.js projects in a GitHub org

  USAGE: orgdeps --org ORG

    org ORG - Required. Name of the GitHub organization to query

*/
  }.toString().split(/\n/).slice(2, -2).join('\n'))
}

function error (msg) {
  console.error(`${'[ERROR]'.bold.red} ${msg}`)
}

function log (msg) {
  console.error(`${'[ LOG ]'.bold.green} ${msg}`)
}

if (argv.org === undefined) {
  error('org must be defined')
  help()
  process.exit(1)
}

var opts = {
  url: `https://api.github.com/orgs/${argv.org}/repos`,
  headers: {
    'User-Agent': 'request'
  }
}

mkdirp.sync(temp_dir)

log(`Fetching org repo list from ${opts.url}`)
request.get(opts, function (e, res, body) {
  if (e) {
    error(e.msg)
    process.exit(1)
  }
  if (res.statusCode !== 200) {
    error(`Received a status code of ${res.statusCode}`)
    error('Org more than likely does not exist')
    process.exit(1)
  }

  try {
    body = JSON.parse(body)
  } catch (e) {
    error('Received malformed request from GitHub, please retry')
    process.exit(1)
  }

  let count = 0
  body.forEach(function (repo) {
    log(`Cloning ${repo.name}`)
    try {
      git.clone(repo.git_url, path.join(temp_dir, repo.name), function (e) {
        count += 1
        log(`Cloned ${repo.name}, ${body.length - count} remaining...`)
        if (count === body.length) return getModules()
      })
    } catch (e) {
      error(`Unable to clone ${repo.name}: ${e.message}`)
    }
  })
})

var deps = []
function getModules () {
  glob(`${temp_dir}/**/package.json`, function (e, files) {
    if (e) {
      error(`Unable to glob for package.jsons: ${e.message}`)
      process.exit(1)
    }
    files.forEach(function (file) {
      try {
        const pkg = require(file)
        let concat = {
          d: Object.keys(pkg.dependencies || {}),
          od: Object.keys(pkg.optionalDependencies || {}),
          dd: Object.keys(pkg.devDependencies || {}),
          pd: Object.keys(pkg.peerDependencies || {})
        }

        deps = deps.concat(concat.d, concat.od, concat.dd, concat.pd)
      } catch (e) {
        error(`Invalid package.json: ${file}`)
      }
    })

    print_deps()
  })
}

function print_deps () {
  var result = deps.reduce(function (p, v) {
    if (p[v] === undefined) p[v] = 0
    p[v]++
    return p
  }, {})

  Object.keys(result).forEach(function (v) {
    console.log(`${result[v]} ${v}`)
  })
}
