<template>
	<div id="content-wrapper">
		<ContentRenderer v-if="data" :value="data">
			<meta-seo
				:title="data.title"
				:description="data.description"
				:image="buildUrl(data.image)"
				:author="data.author.name"
        :url="metaUrl"
			/>

			<post-content-single :data="data" />
		</ContentRenderer>
	</div>
</template>

<script lang="ts" setup>
import { buildUrl } from "#imports";

const { params } = useRoute();
const { fullPath } = useRoute();

const metaUrl = computed(() => buildUrl(fullPath));

const { data } = await useAsyncData<any>("post-single", () => {
	return (
		queryContent(
			"articles",
			params.category as string,
			params.slug as string
		) as any
	).findOne();
});
</script>

<style>
</style>