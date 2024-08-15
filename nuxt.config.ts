// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/scss/extended.scss',
    '~/assets/scss/base.scss',
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
          rel: 'preconnect',
          href: 'https://fonts.cdnfonts.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: 'https://fonts.cdnfonts.com/css/open-dyslexic',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'",
          crossorigin: 'anonymous'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
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

  dayjs: {
    locales: ['id'],
    plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat'],
    defaultLocale: 'id',
    defaultTimezone: 'Asia/Jakarta',
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: "2024-08-12"
})