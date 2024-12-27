// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withNextIntl(nextConfig);


import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfig) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false, // Ensure fs is not bundled
      },
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
