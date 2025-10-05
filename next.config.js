/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ✅ Thumbnails & media sources
      { protocol: 'https', hostname: 'image.thum.io' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 's3-us-west-2.amazonaws.com' },
      { protocol: 'https', hostname: 'cdn.open-pr.com' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: 'www.slideegg.com' },  // ✅ Added
      { protocol: 'https', hostname: 'energybangla.com' },  // ✅ For Dhaka climate study image
    ],
  },
};

module.exports = nextConfig;
