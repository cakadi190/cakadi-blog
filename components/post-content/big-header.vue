<template>
	<div :data-id="post.id" id="big-header-post">
		<div class="image-wrapper">
			<nuxt-img format="webp" :src="post.image" :class="post.title" />
		</div>
		<nuxt-link
			:to="`/kategori/${slugify(post.category[0])}`"
			class="category"
			v-if="post.category[0]"
		>
			<span>{{ post.category[0] }}</span>
		</nuxt-link>
		<div class="post-content">
			<nuxt-link
				class="stretched-link"
				:to="`/${post._dir}/${post._path.replace(/^\/[^\/]+\/[^\/]+\//, '')}`"
			>
				<h3 class="text-merriweather title">{{ post.title }}</h3>
			</nuxt-link>
			<div class="post-meta">
				<div class="author">
					<nuxt-img format="webp" :alt="post.author.name" :src="getGravatar(post.author.email)" />
					<span
						class="d-flex gap-1 align-items-center"
						v-if="post.author.email === 'cakadi190@gmail.com'"
						>{{ post.author.name
						}}<icon class="text-primary" name="solar:verified-check-bold"
					/></span>
				</div>
				<time
					class="date"
					:datetime="$dayjs(post.created_at).utc().toString()"
					>{{ $dayjs(post.created_at).format("LL") }}</time
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { slugify } from "@/utils/url";
import { getGravatar } from "#imports";

defineProps<{
	post: any;
}>();
</script>

<style lang="scss" scoped>
@function encode-color($string) {
  @if type-of($string) == 'color' {
    @return '%23' + str-slice('#{$string}', 2);
  }
  @return $string;
}

@mixin top-left-rounded($color) {
  $encoded-color: encode-color($color);
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 101 101' fill='#{$encoded-color}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z' fill='#{$encoded-color}'%3E%3C/path%3E%3C/svg%3E");
}

@mixin bottom-right-rounded($color) {
  $encoded-color: encode-color($color);
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 101 101' fill='#{$encoded-color}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z' fill='#{$encoded-color}'%3E%3C/path%3E%3C/svg%3E");
}

#big-header-post {
	text-decoration: none;
	color: var(--bs-body-color);
	position: relative;

	a {
		text-decoration: none;
		color: var(--bs-body-color);
	}

	.image-wrapper {
		position: relative;
		height: 25rem;
		overflow: hidden;
		border-radius: var(--bs-border-radius-xl);
		border: 1px solid #f5f5f5;

    @at-root [data-bs-theme=dark] & {
      border-color: var(--bs-body-bg);
    }

		@media screen and (max-width: 992px) {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
		}

		@media screen and (max-width: 576px) {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
		}

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.category {
		position: absolute;
		top: 0;
		right: 0;
		background-color: #f5f5f5;
		padding: 1.25rem 0.5rem;
		border-radius: 0 0 0 var(--bs-border-radius-xl);
		z-index: 2;

		@at-root [data-bs-theme="dark"] & {
			background: var(--bs-body-bg);
		}

		> span {
			padding: 0.5rem 1.5rem;
			border: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
			margin: 0.5rem;
			border-radius: var(--bs-border-radius-lg);
			transition: all 0.3s;
			font-size: 0.875rem;
		}

		&:hover > span {
			background: var(--bs-primary);
			color: var(--bs-white);
		}

		&::before,
		&::after {
			position: absolute;
			content: "";
			display: block;
			width: 10px;
			height: 10px;
		}

		&::before {
			top: 0;
			left: -10px;
			transform: scaleX(-1);
			@include top-left-rounded(#f5f5f5);
		}

		&::after {
			bottom: -10px;
			right: 0;
			transform: scaleX(1) scaleY(-1) rotate(180deg);
      @include bottom-right-rounded(#f5f5f5);
		}

    @at-root [data-bs-theme=dark] & {
      &::before {
        @include top-left-rounded(var(--bs-body-bg));
      }
      &::after {
        @include bottom-right-rounded(var(--bs-body-bg));
      }
    }
	}

	.post-content {
		margin-top: 1.5rem;

		.title {
			line-height: 1.5;

			@media screen and (max-width: 992px) {
				font-size: 1.25rem;
			}
		}

		.post-meta {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			> * {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				&:not(:first-child)::before {
					content: "";
					width: 0.325rem;
					height: 0.325rem;
					display: flex;
					border-radius: 99rem;
					background: rgba(var(--bs-body-color-rgb), 0.25);
				}
			}

			.author {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				img {
					height: 24px;
					width: 24px;
					border-radius: 99rem;
				}
			}
		}
	}
}
</style>
