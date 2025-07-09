/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: useful during dev preview deployments
  allowedDevOrigins: ['https://3000-firebase-fancynext-*.cloudworkstations.dev'],

  // ✅ No rewrites needed for subdomain routing
};

export default nextConfig;
