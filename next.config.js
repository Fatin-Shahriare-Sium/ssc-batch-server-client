const withImages = require('next-images')


module.exports = withImages(
  {
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ['']
    },
    webpack(config, options) {
      return config
    }
  }


)