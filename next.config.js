/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'static.wikia.nocookie.net',
              port: '',
              pathname: '**',
            },
          ],
        domains: [
            "*.com"
        ],
    },  
}

module.exports = nextConfig
