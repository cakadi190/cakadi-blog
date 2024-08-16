<template>
	<div class="header-badge">{{ title }}</div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<style lang="scss" scoped>
.header-badge {
  padding: .45rem .875rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 99rem;
  border: 1px solid rgba(var(--bs-body-color-rgb), .075);
  width: fit-content;
  background: rgba(var(--bs-body-color-rgb), .075);
  display: flex;
  align-items: center;
  gap: .5rem;

  &::before {
    content: '';
    width: .75rem;
    height: .75rem;
    display: flex;
    border-radius: 99rem;
    background: var(--bs-primary);
  }
}
</style>