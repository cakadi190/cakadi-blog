<template>
	<main class="container my-5 pb-5">
		
		<div class="row gy-4 pt-5">
			<div class="col-md-8">
				<!-- <palestine-help /> -->

				<ContentRenderer v-if="data" :value="data">
					<post-content-page :data="data" />
				</ContentRenderer>
			</div>
      <div class="col-md-4">
        <aside class="sidebar-inner">
          <sidebar-widget-socmed />
          <sidebar-widget-donate />
          <sidebar-widget-recent-articles />
        </aside>
      </div>
		</div>
	</main>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const urlRequest = useRequestURL();

const { data } = await useAsyncData<any>("page", () => {
	return (queryContent(`/pages/${route.params.slug}`) as any).findOne();
});

if(data.value == null) {
	router.push({ name: "index" });
}

// Seo Meta
const title = computed(() => data.value.title);
const description = computed(() => data.value.description);
const image = computed(() => urlRequest.origin + (data.value.image ? data.value.image : '/uploads/default.png'));

useSeoMeta({
  ogUrl: urlRequest.href,
	title,
	ogTitle: title,
	twitterTitle: title,
	description,
	ogDescription: description,
	twitterDescription: description,
	ogImage: image.value,
	twitterImage: image.value,
	twitterCard: 'summary_large_image',
});

// Properties
onMounted(() => {
	$("table").each(function () {
		$(this).addClass("table table-striped mb-0");
		$(this).wrap(
			'<div class="table-responsive mb-3 overflow-hidden rounded-3 border"></div>'
		);
	});
});
</script>

<style lang="scss" scoped>
.meta-data {
	display: flex;
	gap: 0.75rem;
	flex-wrap: wrap;
	align-items: center;
	opacity: 0.5;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid var(--bs-border-color);

	> * {
		align-items: center;
		display: flex;
		gap: 0.5rem;
	}
}

.sticky {
	position: sticky;
	top: 6rem;
	z-index: 1020;
}
</style>

<style lang="scss">
#disqus_thread {
	background: transparent;
}

iframe {
	color-scheme: auto;
}
</style>
