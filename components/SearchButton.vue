<template>
	<button @click="toggle">
		<Icon name="fa6-solid:magnifying-glass" />
		<span v-if="withLabel">Cari</span>
	</button>
</template>

<script lang="ts" setup>
const { toggle } = useSearchModal();

withDefaults(
	defineProps<{
		withLabel?: boolean;
	}>(),
	{ withLabel: true }
);
</script>

<style>
</style>