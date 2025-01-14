import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'm.media-amazon.com',
      'example.com',
      'localhost',
      'cinemoq-bucket.s3.amazonaws.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;