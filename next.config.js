/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
  siteUrl: process.env.SITE_URL || 'https://firenze.dev',
  generateRobotsTxt: true,
};

module.exports = nextConfig;
