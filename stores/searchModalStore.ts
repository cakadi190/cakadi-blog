import { defineStore } from 'pinia'

export const searchModalStore = defineStore({
  id: 'searchModalStore',
  state: () => ({
    status: false
  }),
  getters: {
    isOpen(state) {
      return computed(() => state.status);
    },
    isNotOpen(state) {
      return computed(() => !state.status);
    }
  },
  actions: {
    init(status: boolean) {
      document.body.style.overflow = status ? 'hidden' : '';
    },
    open() {
      this.status = true;
      this.init(true);
    },
    close() {
      this.status = false;
      this.init(false);
    },
    toggle() {
      this.status = !this.status;
      this.init(this.status);
    }
  },
})
