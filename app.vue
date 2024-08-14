<template>
	<div id="app-root" :style="getDyslexiaStyle">
		<NuxtLayout>
			<NuxtLoadingIndicator />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
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