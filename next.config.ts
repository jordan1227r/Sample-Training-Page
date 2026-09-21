
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Sample-Training-Page' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;