/** @type {import('next').NextConfig} */

const { join } = require("path")

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["onnxruntime-web"],
  webpack(config, {webpack, isServer}) {
    if (!isServer) {
      // Next.js externals is an array. We push our mapping into it.
      config.externals.push({
        "onnxruntime-web": "ort",
      });
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": join(__dirname, "src"),
      "onnxruntime-web": false,
      "onnxruntime-web/node": false,
    }


    config.module.noParse = [/ort\.wasm\.bundle\.min\.mjs$/];

    // Fallback for browser environments
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    }

    return config
  },
}
