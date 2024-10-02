/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorege.googleleapis.com'
        // hostname: '**'
        // assim libera o caminho para acessar qualquer img
      }
    ]
  }
};

export default nextConfig;
