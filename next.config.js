/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "assets.eguchi.cc" }],
  },
};

module.exports = nextConfig;
