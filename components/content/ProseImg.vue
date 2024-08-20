<template>
  <div class="card overflow-hidden" :style="{width: fitContent ? 'fit-content' : ''}" :class="{'mx-auto': fitContent}">
    <a :href="refinedSrc" class="card-img-top" :data-fancybox="gallery ? 'gallery' : ''" :data-src="refinedSrc"
      :data-caption="galleryCaption">
      <component :is="imgComponent" class="w-100 d-block" :src="refinedSrc" :alt="alt" :width="width" :height="height" />
    </a>
    <div class="card-header border-0 text-center border-top" v-if="title" v-html="title" />
  </div>
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed, resolveComponent } from '#imports'

const imgComponent = useRuntimeConfig().public.mdc.useNuxtImage ? resolveComponent('NuxtImg') : 'img'

const props = withDefaults(defineProps<{
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  title?: string;
  gallery?: boolean;
  galleryCaption?: string;
  fitContent?: boolean;
}>(), {
  alt: '',
  src: '',
  width: undefined,
  height: undefined,
  title: undefined,
});

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>
