<template>
  <button 
    @click="scrollToTop" 
    aria-label="Kembali Ke Atas"
    class="scroll-to-top"
    :class="{ 'show': showButton }"
  >
    ↑
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 50
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--bs-primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  transition: .3s all;
  margin-bottom: 1rem;

  &.show {
    margin-bottom: 0;
    opacity: 1;
  }
}
</style>