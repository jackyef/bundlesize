const fs = require('fs')
const bytes = require('bytes')
const glob = require('glob')
const { error } = require('prettycli')
const config = require('./config')
const debug = require('./debug')
const compressedSize = require('./compressed-size')
const files = []

const matched = {};

config.map(file => {
  const paths = glob.sync(file.path)

  if (!paths.length) {
    error(`There is no matching file for ${file.path} in ${process.cwd()}`, {
      silent: false, // If true, will call process.exit(1) silently
      exit: false, // If true, this will throw an error
    })
  } else {
    paths.map(path => {
      if (!matched[path]) {
        const maxSize = bytes(file.maxSize) || Infinity
        const compression = file.compression || 'brotli'
        const size = compressedSize(fs.readFileSync(path, 'utf8'), compression)
        files.push({ maxSize, path, size, compression })

        matched[path] = true;
      }
    })
  }
})

debug('files', files)

module.exports = files
