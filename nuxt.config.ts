// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/scss/base.scss',
    '~/assets/scss/extended.scss',
  ],

  googleFonts: {
    families: {
      'Fira Code': true,
      'Fira Sans': true,
      'Merriweather': true,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/open-dyslexic',
          crossorigin: 'anonymous',
          id: 'dyslexia-fontloader'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      apisUrl: process.env.APIS_URL,
      siteName: process.env.SITE_NAME,
    }
  },

  modules: [
    '@nuxt/content',
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "dayjs-nuxt",
    "@pinia/nuxt"
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: "2024-08-12"
})