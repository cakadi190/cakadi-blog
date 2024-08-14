<template>
	<div id="post-header-list">
		<nuxt-link
			:to="`/${item._dir}/${item._path.replace(/^\/[^\/]+\/[^\/]+\//, '')}`"
			v-for="item in post"
			:key="item.id"
			class="post-item"
		>
			<div class="image-wrapper">
				<nuxt-img :src="item.image" />
			</div>
			<div class="post-content">
				<h3 class="text-merriweather title">{{ item.title }}</h3>

				<div class="post-meta">
					<div class="author">
						<nuxt-img :src="getGravatar(item.author.email)" />
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
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	post: any;
}>();
</script>

<style lang="scss" scoped>
#post-header-list {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	list-style: none;
	padding: 0;
	margin: 0;
	flex-direction: column;
	position: relative;

	.post-item {
		padding-bottom: 1rem;
		border-bottom: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
		position: relative;
		display: flex;
		gap: 1.5rem;
		text-decoration: none;
		color: var(--bs-body-color);

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
			justify-content: space-between;

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
}
</style>