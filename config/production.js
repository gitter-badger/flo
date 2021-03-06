module.exports = {
  env: 'production',
  port: 8081,
  sw: {
    debug: false,
    preCache: true,
    appCache: {
      policy: 'fastest'
    },
    externalCache: {
      policy: 'cacheFirst'
    }
  },
  express: {
    useGzipped: true
  },
  webpack: {
    devtool: false,
    middleware: false,
    optimizeJS: true,
    compression: true
  }
}
