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

    // Handle onnxruntime-web - copy wasm files to static folder and don't process .mjs files
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules[\\/]onnxruntime-web/,
      type: "javascript/auto",
    })

    // Fallback for browser environments
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    }

    return config
  },
  // Transpile onnxruntime-web package
  transpilePackages: ["onnxruntime-web"],
})
