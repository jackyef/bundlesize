const gzip = require('gzip-size')
const brotli = require('brotli-size')

const getCompressedSize = (data, compression = 'brotli') => {
  let size
  switch (compression) {
    case 'gzip':
      size = gzip.sync(data)
      break
    case 'brotli':
      size = brotli.sync(data)
      break
    case 'none':
    default:
      size = Buffer.byteLength(data)
  }

  return size
}

module.exports = getCompressedSize
