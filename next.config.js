/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // For GitHub Pages deployment with custom domain (ignitionai.xyz)
  // If using GitHub Pages without custom domain, uncomment the basePath lines:
  // basePath: '/ignitionai.xyz',
  // assetPrefix: '/ignitionai.xyz/',
};

module.exports = nextConfig;
