<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Popover as BsPopover } from 'bootstrap';

const props = defineProps({
  text: {
    type: String,
    required: true,
  }
});

const childRef = ref<HTMLElement | null>(null);
let popoverInstance: BsPopover | null = null;

onMounted(() => {
  if (childRef.value) {
    // Hanya berjalan di sisi klien
    import('bootstrap').then(({ Popover }) => {
      popoverInstance = new Popover(childRef.value, {
        title: props.text,
        placement: 'right',
        trigger: 'hover'
      });
    });
  }
});

watch(() => props.text, () => {
  if (popoverInstance) {
    popoverInstance.dispose();
    if (childRef.value) {
      popoverInstance = new BsPopover(childRef.value, {
        title: props.text,
        placement: 'right',
        trigger: 'hover'
      });
    }
  }
});

onUnmounted(() => {
  if (popoverInstance) {
    popoverInstance.dispose();
  }
});
</script>

<template>
  <slot :ref="childRef"></slot>
</template>
