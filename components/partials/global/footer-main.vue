<template>
  <footer class="footer-core">
    <div class="footer-core__back-to-top">
      <ui-tooltip text="Kembali ke atas">
        <a href="#" class="footer-core__back-to-top-link" @click="scrollToTop">
          <i class="fas fa-fw fa-chevron-up"></i>
        </a>
      </ui-tooltip>
    </div>
    <section id="footer-top">
      <div class="container">
        <div class="row gy-4 gy-lg-0">
          <div class="col-md-3">
            <nuxt-link to="/" class="logo-wrapper mb-5">
              <nuxt-img :preload="true" format="webp" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              densities="x1 x2" alt="Logo Catatan Cak Adi" src="/images/brands/logo-white-long.svg" :width="48" height="auto" />
            </nuxt-link>
            
            <div class="d-flex justify-content-center justify-content-lg-start gap-2 flex-wrap">
              <nuxt-link class="btn btn-light text-dark btn-sm" to="/page/about-us">Tentang</nuxt-link>
              <nuxt-link class="btn btn-light text-dark btn-sm" to="/page/catatan-rilis">Catatan Rilis</nuxt-link>
              <nuxt-link class="btn btn-light text-dark btn-sm" to="/page/privacy-and-policy">Kebjakan Privasi</nuxt-link>
              <nuxt-link class="btn btn-light text-dark btn-sm" to="/page/comment-policy">Kebjakan Berkomentar</nuxt-link>
            </div>
          </div>
          <div class="col-md-3">
            <div class="mb-4">
              <h3 class="text-merriweather">Hubungi</h3>
              <p class="mb-0 mt-3"><a href="https://wa.me/6281333550746?text=Halo+Cak+Adi!" class="text-white text-decoration-none d-flex">(+62) 813-3355-0746</a></p>
            </div>
            <div class="mb-4">
              <h3 class="text-merriweather">Surel</h3>
              <p class="mb-0 mt-3"><a href="mailto:catatancakadi@gmail.com" class="text-white text-decoration-none d-flex">catatancakadi@gmail.com</a></p>
            </div>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-3">
            <div class="text-center rounded" id="card">
              <h5 class="text-center h3 text-merriweather mb-3">Berlangganan</h5>
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
        </div>
      </div>
    </section>
    <section id="footer-bottom">
      <div class="container">
        <div class="text-center">
          <p class="mb-0">Copyright © 2003-{{ currentYear }} <nuxt-link to="/">Catatan Cak Adi</nuxt-link>. All
            rights reserved.</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts" setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
.footer-core {
  background: var(--bs-dark);
  color: var(--bs-white);
  margin-top: 6rem;
  z-index: 20;
  border-top: 1px solid transparent;

  @at-root [data-bs-theme=dark] & {
    border-color: rgba(var(--bs-white-rgb), .125);
  }

  #footer-bottom {
    padding-bottom: 2rem;
    padding-top: 2rem;

    a {
      text-decoration: none;
      color: white;
      font-weight: 600;
    }
  }
  #footer-top {
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    height: 32px;
    width: auto;
    
    img {
      height: 32px;
      width: auto;

      @media screen and (max-width: 992px) {
        margin: 0 auto;
      }
    }
  }

  .footer-core__back-to-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .footer-core__back-to-top-link {
      background: white;
      color: var(--bs-dark);
      width: 4rem;
      height: 4rem;
      font-style: 2em;
      border-radius: 50%;
      margin-top: -2rem;
      border: 1px solid var(--bs-dark);
      text-align: center;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .2s;

      &:hover {
        background-color: var(--bs-primary);
        border-color: var(--bs-primary);
        color: var(--bs-white);
      }
    }
  }
}
</style>