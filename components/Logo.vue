<template>
  <nuxt-img loading="lazy" format="webp" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
    densities="x1 x2" alt="Logo Catatan Cak Adi" :src="logoSource" :width="width" :height="height"
    class="d-lg-inline d-md-none d-none" />
  <nuxt-img loading="lazy" format="webp" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
    densities="x1 x2" alt="Logo Catatan Cak Adi" :src="logoSourceSm" :width="width" :height="height" class="d-lg-none" />
</template>

<script lang="ts" setup>
const { isThemeDark } = useDarkMode();

type LogoProps = {
  width?: string | number;
  height?: string | number;
};

const logoSource = computed(() =>
  buildUrl(
    isThemeDark.value
      ? `/images/brands/logo-white-long.svg`
      : `/images/brands/logo-color-long.svg`
  )
);
const logoSourceSm = computed(() =>
  buildUrl(
    isThemeDark.value
      ? `/images/brands/icon-white.svg`
      : `/images/brands/icon-color.svg`
  )
);

withDefaults(defineProps<LogoProps>(), {
  width: 250,
  height: "auto",
});
</script>

<style>

</style>