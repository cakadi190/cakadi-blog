<template>
	<section class="widget" id="socmed-list">
		<h3 class="title"><span>Ikuti Saya</span></h3>

		<ul class="socmed-list">
			<li v-for="item in socmedLists" :key="item.label">
				<a :href="item.link" target="_blank" rel="noopener noreferrer">
					<i :class="['fab fa-fw', `fa-${item.icon}`]" />
					<span>{{ item.label }}</span>
				</a>
			</li>
		</ul>
	</section>
</template>

<script lang="ts" setup>
const socmedLists = ref([
	{ icon: "facebook", label: "Facebook", link: "https://fb.me/cakadi190" },
	{
		icon: "instagram",
		label: "Instagram",
		link: "https://instagram.com/cakadi.id",
	},
	{
		icon: "linkedin-in",
		label: "Linkedin",
		link: "https://linkedin.com/in/cakadi190",
	},
	{
		icon: "youtube",
		label: "Youtube",
		link: "https://youtube.com/@catatancakadi",
	},
]);
</script>

<style lang="scss" scoped>
#socmed-list {
	.socmed-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;

		li {
			a {
				text-decoration: none;
				gap: 0.25rem;
				color: var(--bs-body-color);
				background: rgba(var(--bs-body-color-rgb), 0.125);
				padding: 0.5rem;
				border-radius: 0.5rem;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.2s;

				&:hover {
					background: rgba(var(--bs-primary-rgb), 1);
					color: var(--bs-white);
				}
			}
		}
	}
}
</style>