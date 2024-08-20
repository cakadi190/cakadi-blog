import { defineStore } from 'pinia'

/**
 * Store untuk mengelola dark mode di aplikasi.
 * 
 * @property {Object} state - State objek store.
 * @property {boolean} state.isDarkMode - Status apakah dark mode aktif atau tidak.
 */
export const useDarkModeStore = defineStore('darkMode', {
  /**
   * State yang digunakan untuk mengelola status dark mode.
   * 
   * @returns {{ isDarkMode: boolean }} State awal store.
   * @property {boolean} isDarkMode - Status apakah dark mode aktif atau tidak.
   */
  state: () => ({
    isDarkMode: false
  }),

  /**
   * Aksi yang dapat dilakukan pada store.
   */
  actions: {
    /**
     * Mengubah status dark mode dan menerapkan tema yang sesuai.
     * 
     * @returns {void}
     */
    toggleDarkMode(): void {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme()
    },

    /**
     * Inisialisasi status dark mode berdasarkan nilai yang disimpan di localStorage.
     * 
     * @returns {void}
     */
    initDarkMode(): void {
      if (process.client || import.meta.client || import.meta.client) {
        const savedMode = localStorage.getItem('darkMode')
        this.isDarkMode = savedMode === 'true'
        this.applyTheme()
      }
    },

    /**
     * Menerapkan tema berdasarkan status dark mode.
     * 
     * @returns {void}
     */
    applyTheme(): void {
      if (process.client || import.meta.client) {
        document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light')
        localStorage.setItem('darkMode', String(this.isDarkMode))
      }
    },

    /**
     * Mengembalikan tema ke light mode dan menghapus status dark mode dari localStorage.
     * 
     * @returns {void}
     */
    resetTheme(): void {
      if (process.client || import.meta.client) {
        document.documentElement.setAttribute('data-bs-theme', 'light')
        localStorage.removeItem('darkMode')
        this.isDarkMode = false
      }
    }
  },

  /**
   * Getter yang digunakan untuk memeriksa apakah tema saat ini adalah tema tertentu.
   */
  getters: {
    /**
     * Memeriksa apakah tema saat ini adalah 'light' atau 'dark'.
     * 
     * @param {object} state - State dari store.
     * @returns {(theme: 'light' | 'dark') => boolean} - Fungsi yang mengembalikan `true` jika tema saat ini sesuai dengan yang dicek.
     * @property {boolean} isDarkMode - Status apakah dark mode aktif atau tidak.
     */
    isTheme: (state) => {
      return (theme: 'light' | 'dark') => theme === 'dark' ? state.isDarkMode : !state.isDarkMode
    }
  }
})
