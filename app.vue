<template>
  <div id="app-root" :style="getDyslexiaStyle">
    <nuxt-loading-indicator />
  
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const { initDarkMode } = useDarkMode();
const { initAll } = useBootstrapFive();
const { getDyslexiaStyle, initDyslexiaFont } = useDyslexiaSettings();

onMounted(initAll);
onUpdated(initAll);
onMounted(initDarkMode);
onUpdated(initDarkMode);
onMounted(initDyslexiaFont);
onUpdated(initDyslexiaFont);

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
});
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<style>
:root {
  --scrollbar-thumb: var(--bs-primary);
  --scrollbar-track: var(--bs-light);
  --scrollbar-hover: var(--bs-gray-700);
}

/* Untuk Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}

/* Untuk WebKit (Chrome, Safari, dll.) */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-hover);
}
</style>

<style lang="scss">
#post-single #content-wrapper {
  > div > {

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      &:before {
        display: block;
        content: " ";
        margin-top: -11rem;
        height: 11rem;
        visibility: hidden;
      }
    }
  }
}
</style>