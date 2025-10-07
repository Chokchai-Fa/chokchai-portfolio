/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/portfolio',
  
  // Performance optimizations
  swcMinify: true,
  compress: true,
  
  // Build optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-icons'],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
