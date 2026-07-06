/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // We use the `src/` directory, which Next.js supports natively.
  // Trailing slashes keep programmatic-SEO URLs tidy for crawlers.
  trailingSlash: false,
};

module.exports = nextConfig;
