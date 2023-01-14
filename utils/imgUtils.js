import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export function apiImgPath(name) {
  return publicRuntimeConfig.API_URL + name;
}
