<template>
  <div id="main-layouts">
    <partials-global-navbar-top />
    
    <Suspense>
      <template #default>
        <div>
          <slot />
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>

    <partials-global-footer-main />
    <search-modal />
    <partials-global-navbar-sidenav :nav-menu="navMenus" />
    <back-to-top />
  </div>
</template>

<script lang="ts" setup>
import { nextTick } from 'vue'
import { navMenu } from '@/utils/content';

const navMenus = computed(() => navMenu());

onMounted(() => {
  nextTick(() => {
    // Any DOM-dependent code here
  })
})
</script>

<style lang="scss">
#main-layouts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100svh;
}
</style>