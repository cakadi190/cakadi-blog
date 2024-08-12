<template>
  <nuxt-img :src="logoSource" :width="width" :height="height" />
</template>

<script lang="ts" setup>
const { isThemeDark } = useDarkMode();

type LogoProps = {
  width?: string | number;
  height?: string | number;
};

const logoSource = computed(() => buildUrl(!isThemeDark ? `/images/brands/logo-white-long.svg` : `/images/brands/logo-color-long.svg`));

withDefaults(defineProps<LogoProps>(), {
  width: 250,
  height: 'auto'
});
</script>

<style>

</style>