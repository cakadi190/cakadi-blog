<template>
  <nuxt-img alt="Logo HUT RI Ke-79" :src="logoSource" :width="width" :height="height" />
</template>

<script lang="ts" setup>
const { isThemeDark } = useDarkMode();

type LogoProps = {
  width?: string | number;
  height?: string | number;
};

const logoSource = computed(() => buildUrl(isThemeDark.value ? `/images/brands/hut-ri/logo-white-xxxhdpi.png` : `/images/brands/hut-ri/logo-color-xxxhdpi.png`));

withDefaults(defineProps<LogoProps>(), {
  width: 250,
  height: 'auto'
});
</script>

<style>

</style>