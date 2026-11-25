import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Stop watching node_modules for changes in dev mode
      config.watchOptions = {
        ...config.watchOptions,
        ignored: '/node_modules/'
      }
    }

    return config;
  }
};

export default nextConfig;
