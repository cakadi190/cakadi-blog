<template>
  <div class="card mb-3 overflow-hidden" v-if="isMounted">
    <div class="card-header align-items-center d-flex gap-2 justify-content-between" style="background: var(--bs-body-bg)">
      <span>{{ filename ?? "Penampil Kode" }}</span>

      <div v-if="enableCopy">
        <button class="btn btn-sm" @click="copyToClipBoard">
          <i 
            class="fas"
            :class="copied ? 'fa-check' : 'fa-copy'"
          ></i>
        </button>
      </div>
    </div>
    <div class="overflow-auto">
      <pre :class="$props.class" class="mb-0 p-3 inline-code" :id="elementId" ref="elId"><slot /></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { copyFromElement } from '#imports';

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
  enableCopy: {
    type: Boolean,
    default: true,
  },
  id: {
    type: String,
    default: null,
  },
});

const isMounted = ref(false);
const elId = ref<null | HTMLElement>(null);
const copied = ref(false);

const elementId = computed(() => 
  props.id || `code-viewer-${props.filename?.replace(/\s+/g, '-').toLowerCase() || 'default'}`
);

const copyToClipBoard = async () => {
  try {
    await copyFromElement(`#${elementId.value}`);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2500);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => isMounted.value = true);
</script>

<style lang="scss">
pre {
  background: #2e2e2e;
  
  code {
    .line {
      display: block;
    }
  }
}
</style>