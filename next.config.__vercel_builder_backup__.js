const API_URL = process.env.API_URL;
const API_URL_CUSTOM = API_URL.replace(/^https?:\/\//, '');

module.exports = {
  images: {
    domains: [API_URL_CUSTOM],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    HOTJAR_SITE_ID: process.env.HOTJAR_SITE_ID,
    GOOGLE_ANALYTICS_TRACKING_CODE: process.env.GOOGLE_ANALYTICS_TRACKING_CODE,
  },
};
