// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'https://3000-firebase-fancynext-*.cloudworkstations.dev'
  ],

  async rewrites() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: '{subdomain}.fancyletters.org',
          },
        ],
        destination: '/subdomain?name=:subdomain',
      },
    ];
  },
};

export default nextConfig;
