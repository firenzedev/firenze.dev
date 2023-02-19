/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
  webpack: (config, { dev, isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
