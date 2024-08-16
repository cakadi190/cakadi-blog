<template>
	<div id="app-root" :style="getDyslexiaStyle">
		<NuxtLayout>
			<NuxtLoadingIndicator />
			<NuxtPage />
		</NuxtLayout>

    <SpeedInsights />
	</div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

const { initDarkMode } = useDarkMode();
const { initAll } = useBootstrapFive();
const { getDyslexiaStyle, initDyslexiaFont } = useDyslexiaSettings();

onMounted(initAll);
onUpdated(initAll);
onMounted(initDarkMode);
onUpdated(initDarkMode);
onMounted(initDyslexiaFont);
onUpdated(initDyslexiaFont);
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