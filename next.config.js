/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'image.thum.io' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 's3-us-west-2.amazonaws.com' },
      { protocol: 'https', hostname: 'cdn.open-pr.com' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: 'www.slideegg.com' },
      { protocol: 'https', hostname: 'energybangla.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: '*.githubusercontent.com' },
      { protocol: 'https', hostname: '*.issuewire.com' },
    ],
  },
};

module.exports = nextConfig;
