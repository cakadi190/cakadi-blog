import { searchModalStore } from "~/stores/searchModalStore"

export const useSearchModal = () => {
  const store = searchModalStore();

  return {
    isOpen: store.isOpen,
    open: store.open,
    close: store.close,
    toggle: store.toggle,
    isNotOpen: store.isNotOpen,
  }
}
