/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect configuration
  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: true, // Set to true if this redirect should be permanent (301); otherwise, false (302)
      },
    ];
  },

  // Image domain configuration
  images: {
    domains: ['v1.nitj.ac.in'], // Add external domains here
  },
};

export default nextConfig;
