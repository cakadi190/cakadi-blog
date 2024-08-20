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
      <pre :class="$props.class" class="mb-0 p-3 inline-code" ref="elId"><slot /></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { copyFromElement } from '#imports';

const props = withDefaults(defineProps<{
  code: string;
  language: string | null;
  filename?: string | null;
  highlights?: number[];
  meta?: string | null;
  class?: string | null;
  enableCopy?: boolean;
  id?: string | null;
}>(), {
  code: '',
  language: null,
  filename: null,
  highlights: () => [],
  meta: null,
  class: null,
  enableCopy: true,
  id: null,
});

const isMounted = ref(false);
const elId = ref<null | HTMLElement>(null);
const copied = ref(false);

const copyToClipBoard = async () => {
  try {
    await copyFromElement(elId.value);
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
  box-sizing: border-box;
  width: 100%;
  background: #2e2e2e;
  
  code {
    .line {
      display: block;
      padding: 0.25em;

      &::before {
        content: attr(line);
        margin-right: .5rem;
        color: white;
        opacity: .25;
        display: inline-block;
        min-width: 1.5rem;
      }

      &.highlight {
        &::before {
          opacity: 1;
        }
      }
    }
  }
}
</style>