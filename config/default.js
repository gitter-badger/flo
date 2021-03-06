module.exports = {
  env: 'development',
  port: 9000,
  sw: {
    debug: true,
    preCache: false,
    appCache: false,
    externalCache: {
      policy: 'fastest'
    }
  },
  express: {
    useGzipped: false
  },
  webpack: {
    devtool: '#inline-source-map',
    middleware: true,
    optimizeJS: false,
    compression: false
  }
}
