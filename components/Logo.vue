<template>
  <nuxt-img :src="logoSource" :width="width" :height="height" class="d-lg-inline d-md-none d-none" />
  <nuxt-img :src="logoSourceSm" :width="width" :height="height" class="d-lg-none" />
</template>

<script lang="ts" setup>
const { isThemeDark } = useDarkMode();

type LogoProps = {
  width?: string | number;
  height?: string | number;
};

const logoSource = computed(() => buildUrl(isThemeDark.value ? `/images/brands/logo-white-long.svg` : `/images/brands/logo-color-long.svg`));
const logoSourceSm = computed(() => buildUrl(isThemeDark.value ? `/images/brands/icon-white.svg` : `/images/brands/icon-color.svg`));

withDefaults(defineProps<LogoProps>(), {
  width: 250,
  height: 'auto'
});
</script>

<style>

</style>