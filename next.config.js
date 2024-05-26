/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "st3.depositphotos.com" }],
  },
};

module.exports = nextConfig;
