<template>
  <ul id="post-header-list">
    <li v-for="item in post" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  post: any;
}>();
</script>

<style>

</style>