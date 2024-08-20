<template>
  <div class="widget" id="subscribe">
    <h3 class="title"><span>Berlangganan</span></h3>
  
    <div class="p-4 text-center rounded" id="card">
      <p>Mau dapetin info soal koding, desain dan juga soal kepramukaan? Yuk berlangganan dan dapetin semua benefit yang
        saya sebutkan tadi.</p>
  
      <div class="d-grid">
        <a href="https://catatancakadi.substack.com/?r=4azknq&utm_campaign=pub-share-checklist"
          target="_blank" class="btn btn-primary d-flex gap-2 align-items-center justify-content-center">
          <i class="fas fa-envelope"></i>
          <span>Berlangganan Yuk</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
#subscribe #card {
  background: var(--bs-light);

  @at-root [data-bs-theme=dark] & {
    background: rgba(var(--bs-white-rgb), .05);
  }
}
</style>