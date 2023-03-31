const withRoutes = require("nextjs-routes/config")();
const { withPlaiceholder } = require("@plaiceholder/next");

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
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/page",
        destination: "/page/1",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlaiceholder(withRoutes(nextConfig));
