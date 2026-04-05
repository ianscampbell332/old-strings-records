import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'hq.oldstringsrecords.com' }],
          destination: '/hq/:path*',
        },
      ],
    }
  },
};

export default nextConfig;
