import { useDarkModeStore } from '@/stores/darkModeStore'

/**
 * Composable for managing dark mode state
 * 
 * @returns {Object} An object containing dark mode state and related functions
 * @property {ComputedRef<boolean>} isDarkMode - Computed reference to the current dark mode state
 * @property {() => void} toggleDarkMode - Function to toggle dark mode
 * @property {() => void} initDarkMode - Function to initialize dark mode from localStorage
 * @property {(theme: 'light' | 'dark') => boolean} isTheme - Function to check if a specific theme is active
 * @property {ComputedRef<boolean>} isThemeLight - Computed reference indicating if light theme is active
 * @property {ComputedRef<boolean>} isThemeDark - Computed reference indicating if dark theme is active
 */
export const useDarkMode = () => {
  const darkModeStore = useDarkModeStore()

  return {
    /**
     * Computed reference to the current dark mode state
     */
    isDarkMode: computed(() => darkModeStore.isDarkMode),

    /**
     * Function to toggle dark mode
     */
    toggleDarkMode: darkModeStore.toggleDarkMode,

    /**
     * Function to initialize dark mode from localStorage
     */
    initDarkMode: darkModeStore.initDarkMode,

    /**
     * Function to check if a specific theme is active
     * @param {('light'|'dark')} theme - The theme to check
     * @returns {boolean} True if the specified theme is active, false otherwise
     */
    isTheme: darkModeStore.isTheme,

    /**
     * Function to reset to default theme
     * @returns {void} Applied default theme
     */
    resetTheme: darkModeStore.resetTheme,

    /**
     * Computed reference indicating if light theme is active
     */
    isThemeLight: computed(() => !darkModeStore.isDarkMode),

    /**
     * Computed reference indicating if dark theme is active
     */
    isThemeDark: computed(() => darkModeStore.isDarkMode),
  }
}