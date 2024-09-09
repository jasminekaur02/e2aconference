/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/welcome',
          permanent: true, // Set to true if this redirect should be permanent (301); otherwise, false (302)
        },
      ];
    },
  };
  
  export default nextConfig;
  