<template>
	<div
		class="container vh-100 d-flex justify-content-center align-items-center"
	>
		<meta-seo
			:title="computedTitle"
			:description="computedDesc"
		/>

		<div class="text-center">
			<h1 class="display-1">{{ error.statusCode }}</h1>
			<p class="lead">{{ error.message }}</p>

			<a :href="buildUrl('/')" class="btn btn-primary">Kembali</a>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	error: {
		type: Object,
		required: true,
	},
});

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