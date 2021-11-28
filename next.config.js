
module.exports = {
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
