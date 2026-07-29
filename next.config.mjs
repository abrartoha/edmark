/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Research Degrees existed at two URLs competing for the same queries.
        // /research-degrees is the fuller page and holds the canonical.
        source: "/services/research-degrees",
        destination: "/research-degrees",
        permanent: true,
      },
    ];
  },

  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
