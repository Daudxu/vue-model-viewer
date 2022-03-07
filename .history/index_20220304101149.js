// index.js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/vue-model-viewer.umd.min.js')
} else {
  module.exports = require('./lib/vue-model-viewer.umd.js')
}