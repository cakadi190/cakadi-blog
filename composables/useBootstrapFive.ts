/**
 * Custom composable for initializing Bootstrap 5 components.
 * This composable is designed for Nuxt 3 projects with autoloader.
 * @returns {Object} An object containing initialization functions for Bootstrap components.
 */
export const useBootstrapFive = () => {
  /**
   * Initializes Bootstrap popovers.
   * Selects all elements with the 'data-bs-toggle="popover"' attribute and creates Popover instances.
   */
  const initPopover = () => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new window.bootstrap.Popover(popoverTriggerEl));
  }

  /**
   * Initializes Bootstrap tooltips.
   * Selects all elements with the 'data-bs-toggle="tooltip"' attribute and creates Tooltip instances.
   */
  const initTooltip = () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl));
  }

  /**
   * Initializes all Bootstrap components supported by this composable.
   * Currently initializes popovers and tooltips.
   */
  const initAll = () => {
    initPopover();
    initTooltip();
  }

  return {
    initAll,
    initPopover,
    initTooltip
  }
}