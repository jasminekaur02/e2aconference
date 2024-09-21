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
  domains: [
    'i1.rgstatic.net', 
    'omega.uniwersytetradom.pl', // Add this line
    'media.licdn.com' // Add this if you're using LinkedIn images
  ],
};

export default nextConfig;
