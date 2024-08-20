<template>
	<div class="container" id="post-wrapper-content">
		<div class="row gy-4" id="post-main-content">
			<main class="col-md-8">
        <header-line title="Daftar Artikel" :with-right-link="true" link="/artikel" external-link-text="Selengkapnya" />
        <div class="row gy-4">
          <div class="col-md-6" v-for="item in sortByDate(data)" :key="item.title">
            <post-content-big-header color="#fff" :post="item" />
          </div>
        </div>
      </main>
			<aside class="col-md-4">
				<div class="sidebar-inner">
					<sidebar-widget-socmed />
          <sidebar-widget-donate />
				</div>
			</aside>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data, status, error } = await useLazyAsyncData<any[]>(
	"post-list",
	() =>
		(queryContent("articles") as any)
			.where({ draft: { $eq: false } })
			.limit(12)
			.find()
);

function sortByDate(list: any[]) {
  return list?.slice().sort((a, b) => {
    const dateA = new Date(a.updated_at || a.created_at).getTime();
    const dateB = new Date(b.updated_at || b.created_at).getTime();
    return dateB - dateA;
  });
}
</script>

<style lang="scss">
.sidebar-inner {
  position: sticky;
  top: 6.25rem;
  
	.widget {
		margin-bottom: 2.5rem;
    display: block;

		.title {
			display: flex;
			position: relative;
			font-size: 1.25rem;
			margin-bottom: 1rem;
			border-bottom: 1px solid rgba(var(--bs-body-color-rgb), 0.125);

			span {
				height: 2rem;
				display: flex;
				padding-bottom: 1rem;
				border-bottom: 2px solid var(--bs-primary);
				left: 0;
				bottom: 0;
			}
		}
	}
}
</style>