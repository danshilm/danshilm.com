/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['coverartarchive.org'] },
};

module.exports = nextConfig;
