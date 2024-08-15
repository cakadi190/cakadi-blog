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
@function encode-color($string) {
	@if type-of($string) == "color" {
		@return "%23" + str-slice("#{$string}", 2);
	}
	@return $string;
}

@mixin absolute-rounded($color) {
	$encoded-color: encode-color($color);
	background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 101 101' fill='#{$encoded-color}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z' fill='#{$encoded-color}'%3E%3C/path%3E%3C/svg%3E");
}

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
		line-height: 1.5;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 0;

		.title {
      position: relative;
			line-height: inherit;
			font-size: 1rem;
			margin-bottom: 0;
			background: var(--bs-body-bg);
			padding: 0.5rem 1rem;
			border-radius: var(--bs-border-radius-lg) var(--bs-border-radius-lg) 0 0;

			&::before,
			&::after {
				position: absolute;
				content: "";
				display: block;
				width: 10px;
				height: 10px;
        @include absolute-rounded(#fff);
			}

      &::before {
        bottom: 0;
        left: -10px;
        transform: rotate(180deg);
      }

      &::after {
        bottom: 0;
        right: -10px;
        transform: rotate(270deg);
      }
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