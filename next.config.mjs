// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.prod.website-files.com'], // Add your external hostname here
    },
    eslint: {
      // Warning: Disables ESLint checks during builds (not recommended for production quality)
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  