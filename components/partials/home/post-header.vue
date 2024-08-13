<template>
	<div class="page-preambule">
		<div class="container">
      <lazy-post-layout-header />
		</div>
	</div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.page-preambule {
	min-height: 25vh;
	padding-top: 10rem;
	background: #fafafa;

	@media screen and (max-width: 992px) {
		padding-top: 7.5rem;
	}

	.container {
		padding-bottom: 5rem;

		@media screen and (max-width: 992px) {
			padding-bottom: 2.5rem;
		}
	}
}
</style>