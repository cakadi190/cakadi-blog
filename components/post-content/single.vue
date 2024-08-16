<template>
	<div id="post-single">
		<div class="meta-header">
			<div class="container">
				<h1 class="title">{{ data.title }}</h1>

				<nav aria-label="Breadcrumb Navigation">
					<ul class="breadcrumb">
						<li class="breadcrumb-item">
							<nuxt-link to="/">Home</nuxt-link>
						</li>
						<li class="breadcrumb-item">
							<nuxt-link :to="`/kategori/${slugify(data.category[0])}`">{{
								unslugify(data.category[0])
							}}</nuxt-link>
						</li>
						<li class="breadcrumb-item">
							{{ data.title }}
						</li>
					</ul>
				</nav>

				<a :href="buildUrl(data.image)" data-fancybox class="image-wrapper">
					<nuxt-img
						sizes="100vw sm:50vw md:400px"
						densities="x1 x2"
						:src="buildUrl(data.image)"
					/>
				</a>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-md-9">
					<ContentRendererMarkdown :value="data" />
				</div>
				<div class="col-md-3">
					<aside class="sidebar-inner">
						<sidebar-widget-socmed />
						<sidebar-widget-donate />
					</aside>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { buildUrl, slugify } from "#imports";
import { unslugify } from "@/utils/string";

const props = defineProps<{
	data?: any;
}>();

const breadList = ref([
	{ text: "Beranda", link: buildUrl("/") },
	{
		text: unslugify(props.data.category[0]),
		link: buildUrl(`/kategori/${slugify(props.data.category[0])}`),
	},
	{
		text: props.data.title,
		link: buildUrl(`/${slugify(props.data.category[0])}/${slugify(props.data.title)}`),
	},
]);
const items = breadList.value.map((item, index) => ({
	"@type": "ListItem",
	position: index + 1,
	item: {
		"@id": item.link,
		name: item.text,
	},
}));

useJsonld({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items,
});
</script>

<style lang="scss">
#post-single {
	.meta-header {
		padding-top: 7.5rem;

		.title {
			font-family: var(--blog-font-merriweather);
			line-height: 1.5;

			@media screen and (max-width: 992px) {
				font-size: 1.5rem;
			}
		}

		.image-wrapper {
			width: 100%;
			margin-bottom: 2rem;
			margin-top: 2rem;
			display: flex;
			aspect-ratio: 16 / 9;
			overflow: hidden;
			border-radius: var(--bs-border-radius);

			@media screen and (max-width: 992px) {
				margin-bottom: 1rem;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>