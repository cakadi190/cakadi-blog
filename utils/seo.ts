/**
 * Builds a full URL by combining the base URL from runtime config with the given URL.
 * 
 * @param {string} url - The relative or partial URL to be combined with the base URL.
 * @returns {string} The full, absolute URL.
 */
export const buildUrl = (url: string): string => {
  const runtime = useRuntimeConfig();
  return new URL(url, runtime.public.baseUrl).href;
};

/**
 * Builds a full image URL by combining the base URL from runtime config with the given image URL.
 * 
 * @param {string} url - The relative or partial URL of the image.
 * @returns {string} The full, absolute URL of the image.
 */
export const buildImageUrl = (url: string): string => {
  const runtime = useRuntimeConfig();
  return new URL(url, runtime.public.baseUrl).href;
};

/**
 * Builds a page title by combining the given title with the app name from runtime config.
 * 
 * @param {string} title - The main title of the page.
 * @returns {string} The full page title, including the app name.
 */
export const buildTitle = (title: string): string => {
  return `${title} • ${useRuntimeConfig().public.siteName}`
};