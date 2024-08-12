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