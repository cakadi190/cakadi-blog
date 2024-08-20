<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  option: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  placement: {
    type: String as PropType<'top' | 'left' | 'right' | 'bottom'>,
    default: 'top'
  }
});

const childRef = ref<HTMLElement | null>(null);
let tooltipInstance: any = null;

onMounted(() => {
  if (childRef.value) {
    import('bootstrap').then(({ Tooltip: BsTooltip }) => {
      tooltipInstance = new BsTooltip(childRef.value, {
        title: props.text,
        placement: props.placement,
        trigger: 'hover',
        ...props.option
      });
    });
  }
});

watch(() => [props.text, props.placement], () => {
  if (tooltipInstance) {
    tooltipInstance.dispose();
    if (childRef.value) {
      import('bootstrap').then(({ Tooltip: BsTooltip }) => {
        tooltipInstance = new BsTooltip(childRef.value, {
          title: props.text,
          placement: props.placement,
          trigger: 'hover',
          ...props.option
        });
      });
    }
  }
});

onUnmounted(() => {
  if (tooltipInstance) {
    tooltipInstance.dispose();
  }
});
</script>

<template>
  <slot :ref="childRef"></slot>
</template>
