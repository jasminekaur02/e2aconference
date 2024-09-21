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
  // next.config.js

  images: {
    domains: ['v1.nitj.ac.in', 'i1.rgstatic.net', 'omega.uniwersytetradom.pl','media.licdn.com'], // Add any other domains you're using
  },


     // Add this if you're using LinkedIn images
  
};

export default nextConfig;
