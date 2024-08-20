<template>
  <footer class="footer-core">
    <div class="container">
      <div class="text-center">
        <p class="text-muted mb-0">Copyright © 2003-{{ currentYear }} <nuxt-link to="/">Catatan Cak Adi</nuxt-link>. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
.footer-core {
  display: flex;
  margin-top: 2rem;
  background-color: #f5f5f5;
  padding: 1rem 0;

  @at-root [data-bs-theme=dark] & {
    background: var(--bs-body-bg);
  }

  p, a {
    color: var(--bs-body-color);
    text-decoration: none;
  }
}
</style>