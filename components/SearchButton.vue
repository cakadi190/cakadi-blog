<template>
	<button @click="toggle" aria-label="Search Modal Button">
		<ClientOnly>
			<Icon name="fa6-solid:magnifying-glass" />
		</ClientOnly>
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