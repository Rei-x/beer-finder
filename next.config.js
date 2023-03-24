const withRoutes = require("nextjs-routes/config")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.punkapi.com",
        port: "",
        pathname: "/v2/**",
      },
    ],
  },
};

module.exports = withRoutes(nextConfig);
