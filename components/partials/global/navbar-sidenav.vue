<template>
	<div
		class="offcanvas offcanvas-start"
		tabindex="-1"
		id="navbarTop"
		aria-labelledby="navbarTopLabel"
	>
		<div class="offcanvas-header">
			<nuxt-link class="offcanvas-title" to="/">
				<logo-hut-ri />
				<div class="vr" />
				<logo />
			</nuxt-link>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			></button>
		</div>
		<div class="offcanvas-body">
			<ul class="navbar-nav justify-content-end flex-grow-1">
				<li class="nav-item" v-for="(item, index) in navMenu" :key="index">
					<nuxt-link class="nav-link" :to="item.target">
						{{ item.title }}
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	navMenu?: any[];
}>();
</script>

<style lang="scss">
.offcanvas-title {
	display: flex;
	align-items: center;
	margin: 0;
	gap: 1rem;
	flex-direction: row;

	img {
		height: 28px !important;
		width: auto !important;
	}
}
</style>