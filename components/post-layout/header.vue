<template>
	<div class="row gy-4" v-if="data">
		<div class="col-md-6">
			<post-content-big-header :post="data[0]" />
			<nuxt-link
				to="/artikel"
				class="btn d-none d-md-none d-lg-flex btn-primary btn-lg btn-cta"
			>
				<span>Lihat Semua Artikel</span>
				<i class="fas fa-arrow-right"></i>
			</nuxt-link>
		</div>
		<div class="col-md-6">
			<div id="post-header-list">
        <header-badge title="Artikel Terbaru" />
				<post-content-small-header
					v-for="item in data.slice(1, 5)"
					:key="item.id"
					:item="item"
				/>
			</div>
		</div>
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

<style lang="scss" scoped>
.btn-cta {
	border-radius: 99rem;
	padding: 1rem 2rem;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	width: fit-content;
}

#post-header-list {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	list-style: none;
	padding: 0;
	margin: 0;
	flex-direction: column;
	position: relative;
}
</style>