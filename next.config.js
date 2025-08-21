/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Solution2Properties' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Solution2Properties' : '',
}

module.exports = nextConfig