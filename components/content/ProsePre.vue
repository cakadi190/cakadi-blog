<template>
	<div class="card mb-3 overflow-hidden" v-if="isMounted" :id="generateRandomString(10)" ref="elId">
		<div class="card-header align-items-center d-flex gap-2 justify-content-between" style="background: var(--bs-body-bg)">
			<span>{{ $props.filename ?? "Penampil Kode" }}</span>

			<div v-if="$props.enableCopy">
				<button class="btn btn-sm" @click="copyToClipBoard">
					<i class="fas"
            :class="copied ? 'fa-check' : 'fa-copy'"
          ></i>
				</button>
			</div>
		</div>
		<div class="overflow-auto">
			<pre :class="$props.class" class="mb-0 p-3 inline-code"><slot /></pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import { generateRandomString } from '#imports';

defineProps({
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
});

const isMounted = ref(false);
const elId = ref<null | HTMLElement>(null);
const copied = ref(false);

const copyToClipBoard = async () => {
  const elementTargetId = elId.value.getAttribute('id');

  try {
    await copyFromElement(`#${elementTargetId} pre`);
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