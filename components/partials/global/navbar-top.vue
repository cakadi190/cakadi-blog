<template>
	<nav
		class="navbar navbar-expand-xl fixed-top"
		id="navbar-main"
		aria-label="Navbar Main"
		:class="{ scrolled: currentScroll > 10 }"
	>
		<div class="container">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#navbarTop"
				aria-controls="navbarTop"
				aria-label="Toggle navigation"
			>
				<icon name="fa6-solid:bars" />
			</button>
			<nuxt-link class="navbar-brand" to="/">
				<logo-hut-ri />
				<div class="vr" />
				<logo />
			</nuxt-link>
			<search-button class="navbar-toggler" :with-label="false" />

			<div class="collapse navbar-collapse">
				<ul class="navbar-nav justify-content-end flex-grow-1">
					<li class="nav-item" v-for="(item, index) in navMenus" :key="index">
						<nuxt-link class="nav-link" :to="item.target">
							{{ item.title }}
						</nuxt-link>
					</li>
					<li class="nav-item d-none d-md-none d-lg-inline-flex">
						<search-button :with-label="false" class="nav-link" />
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import { navMenu } from '@/utils/content';

const currentScroll = ref(0);
const navMenus = computed(() => navMenu());

onMounted(() => {
	currentScroll.value = window.scrollY;
	window.addEventListener("scroll", () => {
		currentScroll.value = window.scrollY;
	});
});
</script>

<style lang="scss">
.navbar#navbar-main {
	transition: all 0.2s;
	border-bottom: 1px solid rgba(var(--bs-body-color-rgb), 0.125);

	&.scrolled {
		background-color: var(--bs-body-bg);
		border-bottom: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
	}

	.navbar-toggler {
		padding: 0.5rem;
		background: transparent;
		outline: 0;
		border: 0;
		box-shadow: unset;
		width: 3rem;
		height: 3rem;
	}

	.navbar-brand {
		padding-top: 1rem;
		padding-bottom: 1rem;
		gap: 1rem;
		display: flex;
		align-items: center;
		margin: 0;

		img {
			height: 32px !important;
			width: auto !important;

			@media screen and (max-width: 992px) {
				height: 42px !important;
				width: auto !important;
			}
		}
	}

	.navbar-nav {
		gap: 0.5rem;
	}

	.nav-item {
		.nav-link {
			vertical-align: middle;
			display: flex;
			align-items: center;
			transition: all 0.3s;

			&:hover {
				text-decoration: underline !important;
				opacity: 1;
				color: var(--bs-primary);
			}
		}
	}
}
</style>