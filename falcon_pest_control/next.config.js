const nextConfig = {
  allowedDevOrigins: ['*','192.168.1.9'],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

module.exports = nextConfig;
