/** @format */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  i18n,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
  images: {
    domaina: ['lh3.googleusercontent.com'],
  },
}

module.exports = {
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  optimizeFonts: true,

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],

    minimumCacheTTL: 15000000,
  },
}
