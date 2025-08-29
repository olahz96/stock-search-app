import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  redirects: async () => [
    { source: '/', destination: '/stock/search', permanent: false },
    { source: '/stock', destination: '/stock/search', permanent: false }
  ],
  typedRoutes: true
}

export default nextConfig
