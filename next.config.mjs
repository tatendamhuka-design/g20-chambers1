/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the reactCompiler option if it's causing issues
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development' ? false : true,
  },
}

export default nextConfig