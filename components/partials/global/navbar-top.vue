<template>
	<nav
		class="navbar navbar-expand-lg fixed-top"
		id="navbar-main"
		aria-label="Navbar Main"
    :class="{'scrolled': currentScroll > 10}"
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

      <partials-global-navbar-menu :nav-menu="navMenu" />
      <partials-global-navbar-sidenav :nav-menu="navMenu" />
		</div>
	</nav>
</template>

<script lang="ts" setup>
const currentScroll = ref(0);
const navMenu = ref([
	{
		title: "Beranda",
		target: "/",
	},
	{
		title: "Desain Grafis",
		target: "/kategori/desain-grafis",
	},
	{
		title: "Coding",
		target: "/kategori/coding",
	},
	{
		title: "Teknologi",
		target: "/kategori/teknologi",
	},
	{
		title: "Pramuka",
		target: "/kategori/pramuka",
	},
	{
		title: "Pengalaman Hidup",
		target: "/kategori/pengalaman-hidup",
	},
]);

onMounted(() => {
  currentScroll.value = window.scrollY;
  window.addEventListener("scroll", () => {
    currentScroll.value = window.scrollY;
  });
});
</script>

<style lang="scss">
.navbar#navbar-main {
  transition: all .2s;
  border-bottom: 1px solid rgba(var(--bs-body-color-rgb), .125);

  &.scrolled {
    background-color: var(--bs-body-bg);
    border-bottom: 1px solid rgba(var(--bs-body-color-rgb), .125);
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