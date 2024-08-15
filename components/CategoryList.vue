<template>
	<div class="row">
		<div
			class="col-6 col-lg-4 col-xxl-2 mb-3"
			v-for="item in categories"
			:key="item.slug"
		>
			<nuxt-link :to="`/kategori/${item.slug}`" class="category-card">
				<div class="category-card-image">
					<nuxt-img
						loading="lazy"
						sizes="100vw sm:50vw md:400px"
						densities="x1 x2"
						format="webp"
						:src="item.image"
						:alt="`Kategori ${item.label}`"
					/>
				</div>
				<div class="category-content">
					<h3 class="text-merriweather title">{{ item.label }}</h3>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defaultCategory } from "@/utils/content";

const categories = computed(() => defaultCategory());
</script>

<style lang="scss" scoped>
.category-card {
	position: relative;
	text-decoration: none;
	color: var(--bs-body-color);
	transition: all 0.2s;
	border-radius: 1rem;
	display: flex;
	overflow: hidden;

	.category-card-image {
		width: 100%;
		height: 16rem;
		overflow: hidden;
		position: relative;

		img {
			width: 100%;
			transition: all 0.2s;
			height: 100%;
			object-fit: cover;
		}
	}

	.category-content {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0;
		padding: 1rem;
		z-index: 2;
		transition: all 0.2s;
		left: 0;
		right: 0;
		text-align: center;
		height: 50%;
		line-height: 1.5;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(
			to bottom,
			transparent,
			color-mix(in srgb, var(--bs-body-bg) 75%, transparent),
			color-mix(in srgb, var(--bs-body-bg) 100%, transparent)
		);

		.title {
			line-height: inherit;
			font-size: 1.25rem;
			margin-bottom: 0;
		}
	}

	&:hover {
		.category-card-image {
			img {
				transform: scale(1.1);
			}
		}

		.category-content {
			transition: all 0.2s;
		}
	}
}
</style>