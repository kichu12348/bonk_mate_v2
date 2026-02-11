/*
VITE_PUBLIC_GITHUB_URL
VITE_PUBLIC_APK_URL
VITE_PUBLIC_CDN_URL
 */

const Config = {
  GITHUB_URL: import.meta.env.VITE_PUBLIC_GITHUB_URL,
  APK_URL: import.meta.env.VITE_PUBLIC_APK_URL,
  CDN_URL: import.meta.env.VITE_PUBLIC_CDN_URL,
};

export default Config;
