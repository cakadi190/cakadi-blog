<template>
	<div class="collapse navbar-collapse">
		<ul class="navbar-nav justify-content-end flex-grow-1">
			<li class="nav-item" v-for="(item, index) in navMenu" :key="index">
				<nuxt-link class="nav-link" :to="item.target">
					{{ item.title }}
				</nuxt-link>
			</li>
			<li class="nav-item d-none d-md-none d-lg-inline-flex">
				<search-button :with-label="false" class="nav-link" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
  navMenu?: any[];
}>();
</script>

<style>
</style>