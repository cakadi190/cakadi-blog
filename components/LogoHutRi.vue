<template>
  <nuxt-img loading="lazy" format="webp" alt="Logo HUT RI Ke-79"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px" densities="x1 x2" :src="logoSource" :width="width"
    :height="height" />
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
      ? `/images/brands/hut-ri/logo-white-xxxhdpi.png`
      : `/images/brands/hut-ri/logo-color-xxxhdpi.png`
  )
);

withDefaults(defineProps<LogoProps>(), {
  width: 250,
  height: "auto",
});
</script>

<style>

</style>