import { defineStore } from 'pinia';
import { computed, type ComputedRef, type CSSProperties } from 'vue';

/**
 * Pinia store untuk mengelola pengaturan dyslexia.
 * 
 * @property {Object} state - State objek store.
 * @property {boolean} state.isDyslexiaFontEnabled - Status apakah font dyslexia diaktifkan.
 */
export const useDyslexiaStore = defineStore('dyslexia', {
  state: () => ({
    isDyslexiaFontEnabled: false,
  }),
  actions: {
    /**
     * Toggle status font dyslexia dan simpan ke localStorage.
     */
    toggleDyslexiaFont() {
      this.isDyslexiaFontEnabled = !this.isDyslexiaFontEnabled;
      localStorage.setItem('dyslexia', String(this.isDyslexiaFontEnabled));
    },

    /**
     * Reset pengaturan dyslexia ke nilai default.
     */
    resetDyslexiaSetting() {
      this.isDyslexiaFontEnabled = false;
      localStorage.removeItem('dyslexia');
    },

    /**
     * Inisialisasi pengaturan dyslexia dari localStorage.
     */
    initDyslexiaFont() {
      this.isDyslexiaFontEnabled = localStorage.getItem('dyslexia') === 'true';
    },
  },
  getters: {
    /**
     * Computed property yang mengembalikan nilai a`isDyslexiaFontEnabled`.
     * 
     * @returns {ComputedRef<boolean>} Nilai a`isDyslexiaFontEnabled`.
     */
    isDyslexiaEnabled: (state): ComputedRef<boolean> => computed<boolean>(() => state.isDyslexiaFontEnabled),
    
    /**
     * Computed property yang mengembalikan gaya font berdasarkan pengaturan dyslexia.
     * 
     * @returns {ComputedRef<Object>} Objek dengan properti `fontFamily` berdasarkan status `isDyslexiaFontEnabled`.
     */
    getDyslexiaStyle(state): ComputedRef<CSSProperties> {
      return computed(() => {
        const style: CSSProperties = {
          fontFamily: state.isDyslexiaFontEnabled ? 'Open-Dyslexic !important' : 'var(--bs-family-sans-serif)',
        };

        if (state.isDyslexiaFontEnabled) {
          style.lineHeight = '1.5';
          style.letterSpacing = 'normal';
        }

        return style;
      });
    }
  }
});