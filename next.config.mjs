/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          bodySizeLimit: '4mb' // Or any other appropriate limit
        }
      },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'lh3.googleusercontent.com',
                pathname:'**'
            },
            {
                protocol:'https',
                hostname:'avatars.githubusercontent.com',
                pathname:'**'
            },
            {
                protocol:'https',
                hostname:'res.cloudinary.com',
                pathname:'**'
            
            },
            {
                protocol:'https',
                hostname:'images.pexels.com',
                pathname:'**'
            }
                
        ]
    }
};

export default nextConfig