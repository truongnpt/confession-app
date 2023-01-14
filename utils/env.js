import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default {
  APP_URL: publicRuntimeConfig.APP_URL,
  API_URL: publicRuntimeConfig.API_URL,
  HOTJAR_SITE_ID: publicRuntimeConfig.HOTJAR_SITE_ID,
  GOOGLE_ANALYTICS_TRACKING_CODE:
    publicRuntimeConfig.GOOGLE_ANALYTICS_TRACKING_CODE,
};
