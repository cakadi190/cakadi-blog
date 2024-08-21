import { useDyslexiaStore } from '@/stores/dyslexiaStore';

/**
 * Hook untuk mengelola pengaturan dyslexia.
 * @returns {Object} Objek yang berisi fungsi dan properti terkait pengaturan dyslexia.
 * @property {boolean} isDyslexiaFontEnabled - Status apakah font dyslexia diaktifkan.
 * @property {() => void} toggleDyslexiaFont - Fungsi untuk mengaktifkan/menonaktifkan font dyslexia.
 * @property {() => void} initDyslexiaFont - Fungsi untuk menginisialisasi pengaturan font dyslexia.
 * @property {() => void} resetDyslexiaSetting - Fungsi untuk mereset pengaturan dyslexia ke nilai default.
 * @property {Object} getDyslexiaStyle - Gaya font berdasarkan pengaturan dyslexia.
 */
export function useDyslexiaSettings() {
  const store = useDyslexiaStore();

  return {
    isDyslexiaFontEnabled: store.isDyslexiaFontEnabled,
    isDyslexiaEnabled: store.isDyslexiaEnabled,
    toggleDyslexiaFont: store.toggleDyslexiaFont,
    initDyslexiaFont: store.initDyslexiaFont,
    resetDyslexiaSetting: store.resetDyslexiaSetting,
    getDyslexiaStyle: store.getDyslexiaStyle,
  };
}
