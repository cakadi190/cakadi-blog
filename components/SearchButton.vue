<template>
	<button @click="toggle" aria-label="Search Modal Button">
		<i class="fas fa-search"></i>
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