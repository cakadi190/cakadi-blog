<template>
	<h3 class="title">
    <span>{{ title }}</span>
    <nuxt-link
      v-if="withRightLink"
      :to="link"
      :target="isExternal ? '_blank' : '_self'"
      :rel="isExternal ? 'noopener noreferrer' : ''"
    >
      {{ externalLinkText }}
    </nuxt-link>
  </h3>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  title: string;
  withRightLink?: boolean;
  link?: string;
  isExternal?: boolean;
  externalLinkText?: string;
}>(), {
  withRightLink: false,
  isExternal: false,
  externalLinkText: 'Selengkapnya',
})
</script>

<style lang="scss" scoped>
.title {
	display: flex;
	position: relative;
	font-size: 1.25rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
  justify-content: space-between;
  align-items: center;

	span {
		height: 2rem;
		display: flex;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--bs-primary);
	}

  a {
    text-decoration: none;
    font-size: 1rem;
    color: var(--bs-body-color);

    &:hover {
      color: var(--bs-primary);
    }
  }
}
</style>