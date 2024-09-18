/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "images.remotePatterns",
      "picsum.photos",
    ],
  },
};

export default nextConfig;
