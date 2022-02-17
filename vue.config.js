module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/ze/' // note the trailing slash
    : '/',
    outputDir: 'docs',
    filenameHashing: false,
    productionSourceMap: false,
  }