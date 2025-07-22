/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
  },
}

module.exports = nextConfig
