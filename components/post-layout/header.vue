<template>
	<div class="row" v-if="data">
    <div class="col-md-6">
      <post-content-big :post="data[1]" />
    </div>
    <div class="col-md-6"></div>
	</div>
</template>

<script lang="ts" setup>
const { data, status, error } = await useLazyAsyncData<any[]>(
	"header",
	() =>
		(queryContent("articles") as any)
			.where({ draft: { $eq: false } })
      .limit(5)
			.find(),
	{
		transform: (items) =>
			items?.sort(
				(a, b) =>
					new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
			),
	}
);
</script>

<style>
</style>