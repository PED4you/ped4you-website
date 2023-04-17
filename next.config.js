/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  swSrc: "service-worker.js",
})

const { join } = require("path")

module.exports = withPWA({
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": join(__dirname, "src"),
    }

    return config
  },
  experimental: {
    appDir: true,
  },
})
