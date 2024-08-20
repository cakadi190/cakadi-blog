<template>
  <div id="app-root" :style="getDyslexiaStyle">
    <NuxtLayout name="fullwidth">
      <NuxtLoadingIndicator />
  
      <div class="container my-auto d-flex justify-content-center align-items-center">
        <meta-seo :title="computedTitle" :description="computedDesc" />
  
        <div>
          <div class="text-center">
            <h1 class="display-1">{{ error.statusCode }}</h1>
            <p class="lead">{{ error.message }}</p>
  
            <a :href="buildUrl('/')" class="btn btn-primary">Kembali</a>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Lihat Log Error
            </button>
          </div>
  
          <div class="collapse" id="collapseExample">
            <div class="container">
              <div class="card card-body">
                <div class="overflow-auto" v-html="error.stack" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { buildUrl } from "#imports";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const { initDarkMode } = useDarkMode();
const { initAll } = useBootstrapFive();
const { getDyslexiaStyle, initDyslexiaFont } = useDyslexiaSettings();

onMounted(initAll);
onUpdated(initAll);
onMounted(initDarkMode);
onUpdated(initDarkMode);
onMounted(initDyslexiaFont);
onUpdated(initDyslexiaFont);

const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

console.log(props.error)

const computedTitle = computed(() =>
  props.error.statusCode === 404
    ? "Halaman tidak dapat ditemukan!"
    : "Ada kesalahan!"
);

const computedDesc = computed(() =>
  props.error.statusCode === 404
    ? "Halaman yang anda cari tidak dapat ditemukan!"
    : "Ada kesalahan saat memuat halaman ini!"
);
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
