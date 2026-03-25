/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router est maintenant stable dans Next.js 14
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
  async redirects() {
    return [
      {
        source: '/activation-projet',
        destination: '/activation',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
