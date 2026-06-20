
/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' }, // TODO: Cloudinary for production
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

