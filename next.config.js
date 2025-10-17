/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  assetPrefix: '/lucasmissibadev',
  basePath: '/lucasmissibadev',
}

module.exports = nextConfig
