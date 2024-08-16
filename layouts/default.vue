<template>
  <div id="main-layouts">
    <partials-global-navbar-top />
    <slot />
    <partials-global-footer-main />
    <search-modal />
    <partials-global-navbar-sidenav :nav-menu="navMenus" />
    <back-to-top />
  </div>
</template>

<script lang="ts" setup>
import { navMenu } from '@/utils/content';

const navMenus = computed(() => navMenu());
</script>

<style>

</style>