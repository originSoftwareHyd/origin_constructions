/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for Apache hosting (Hostinger). `npm run build` writes the site to /out.
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // The image optimisation server isn't available on static hosting.
    unoptimized: true
  }
}

module.exports = nextConfig
