<template>
	<nuxt-link :data-id="post.id" :to="`/${post._dir}/${post._path.replace(/^\/[^\/]+\/[^\/]+\//, '')}`" id="big-header-post">
		<div class="image-wrapper">
			<nuxt-img :src="post.image" />
			<div class="category">
				{{ post.category.join(",") }}
			</div>
		</div>
		<div class="post-content">
			<h3 class="text-merriweather title">{{ post.title }}</h3>
			<div class="post-meta">
				<div class="author">
					<nuxt-img :src="getGravatar(post.author.email)" />
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
					>{{ $dayjs(post.created_at).format("LLLL") }}</time
				>
			</div>
		</div>
	</nuxt-link>
</template>

<script lang="ts" setup>
defineProps<{
	post: any;
}>();
</script>

<style lang="scss" scoped>
#big-header-post {
	text-decoration: none;
	color: var(--bs-body-color);

	.image-wrapper {
		position: relative;
		height: 25rem;
		overflow: hidden;
		border-radius: var(--bs-border-radius-xl);
		border: 1px solid #fafafa;

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

		.category {
			position: absolute;
			top: 0;
			right: 0;
			background: #fafafa;
			padding: 0.75rem 1.5rem;
			border-radius: 0 0 0 var(--bs-border-radius-xl);
      
      @media screen and (max-width: 992px) {
        padding: 0.625rem 1rem;
        font-size: .75em;
      }

			&::before {
				position: absolute;
				content: "";
				display: block;
				width: 10px;
				height: 10px;
				top: 0;
				left: -10px;
        transform: scaleX(-1);
				background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 101 101' fill='%23fafafa' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z' fill='%23fafafa'%3E%3C/path%3E%3C/svg%3E");
			}

			&::after {
				position: absolute;
				content: "";
				display: block;
				width: 10px;
				height: 10px;
				bottom: -10px;
				right: 0;
        transform: scaleX(1) scaleY(-1) rotate(180deg);
				background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 101 101' fill='%23fafafa' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z' fill='%23fafafa'%3E%3C/path%3E%3C/svg%3E");
			}
		}
	}

	.post-content {
		margin-top: 1.5rem;

    .title {
      line-height: 1.5;
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
