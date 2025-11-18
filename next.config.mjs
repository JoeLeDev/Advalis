/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router est maintenant stable dans Next.js 14
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

export default nextConfig
