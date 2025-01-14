import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['m.media-amazon.com', 'example.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;