/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd'],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig