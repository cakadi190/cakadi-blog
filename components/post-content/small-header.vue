<template>
	<nuxt-link
		:to="`/${item._dir}/${item._path.replace(/^\/[^\/]+\/[^\/]+\//, '')}`"
		class="post-item"
	>
		<div class="image-wrapper">
			<nuxt-img
				loading="lazy"
				format="webp"
				sizes="100vw sm:50vw md:400px"
				densities="x1 x2"
				:alt="item.title"
				:src="item.image"
			/>
		</div>
		<div class="post-content">
			<h3 class="text-merriweather title">{{ item.title }}</h3>

			<div class="post-meta">
				<div class="author">
					<nuxt-img
						loading="lazy"
						sizes="100vw sm:50vw md:400px"
						densities="x1 x2"
						format="webp"
						:src="getGravatar(item.author.email)"
						:alt="item.author.name"
					/>
					<span
						class="d-flex gap-1 align-items-center"
						v-if="item.author.email === 'cakadi190@gmail.com'"
						>{{ item.author.name
						}}<icon class="text-primary" name="solar:verified-check-bold"
					/></span>
				</div>
				<time
					class="date"
					:datetime="$dayjs(item.created_at).utc().toString()"
					>{{ $dayjs(item.created_at).format("LL") }}</time
				>
			</div>
		</div>
	</nuxt-link>
</template>

<script lang="ts" setup>
import { getGravatar } from "#imports";

defineProps<{
	item: any;
}>();
</script>

<style lang="scss" scoped>
.post-item {
	padding-bottom: 1rem;
	border-bottom: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
	position: relative;
	display: flex;
	gap: 1.5rem;
	text-decoration: none;
	color: var(--bs-body-color);
	align-items: center;

	@media screen and (max-width: 992px) {
		gap: 1rem;
	}

	&:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.image-wrapper {
		aspect-ratio: 1 / 1;
		flex-shrink: 0;
		width: 6.25rem;
		border-radius: var(--bs-border-radius-lg);
		overflow: hidden;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		@media screen and (max-width: 992px) {
			aspect-ratio: 1 / 1;
			width: 5.75rem;
			height: 5.75rem;
		}

		img {
			position: absolute;
			object-fit: cover;
			height: 100%;
		}
	}

	.post-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		.title {
			font-size: 1.25rem;
			line-height: 1.5;

			@media screen and (max-width: 992px) {
				font-size: 1rem;
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