<script lang="ts">
export default defineComponent({
	name: "PageHeader",
});
</script>

<script setup lang="ts">
defineProps<{
	backTo?: string;
}>();
</script>

<template>
	<header id="masthead">
		<div class="container">
			<div class="row">
				<!-- <div class="col-md-12">
					<palestine-help />
				</div> -->
				<div class="col-xxl-6 col-xs-8">
					<nuxt-link
						v-if="backTo"
						:to="backTo"
						class="btn btn-link text-decoration-none d-flex gap-2 p-0 align-items-center mb-4"
					>
						<Icon name="fa6-solid:chevron-left" />
						<span>Kembali</span>
					</nuxt-link>

					<h1 class="h2">
						<slot name="title" />
					</h1>
					<h2 class="h4 opacity-75 lh-base mb-0">
						<slot name="subtitle" />
					</h2>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
#masthead {
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -2;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.8)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");

		[data-bs-theme="dark"] & {
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / .1)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
		}
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: linear-gradient(to top, white, rgba(255, 255, 255, 0.25));

		[data-bs-theme="dark"] & {
			background: linear-gradient(
				to top,
				rgb(var(--bs-body-bg-rgb)),
				rgba(var(--bs-body-bg-rgb), 0.125)
			);
		}
	}

	.row {
		min-height: 25dvh;
		padding-bottom: 5rem;
		padding-top: 1.5rem;
		align-items: center;
	}
}
</style>