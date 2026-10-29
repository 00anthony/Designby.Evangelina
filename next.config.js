/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    minimumCacheTTL: 2678400, //longer cache time limits frequency of requests
    unoptimized: true, //temp fix to stop optimization entirely until limit resets (30days)
    // formats: ['image/webp'], *check if avif images present first
  }
};

module.exports = nextConfig;
