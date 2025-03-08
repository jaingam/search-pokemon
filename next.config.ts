import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
        port: '',
        pathname: '/artwork/**',
        search: '',
      }, {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
        search: '',
      }, {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
