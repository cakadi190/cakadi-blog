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

  // postcss: {
  //   plugins: {
  //     "autoprefixer": {},
  //     "postcss-nested": {},
  //     "postcss-custom-media": {}
  //   }
  // },

  image: {
    format: ['webp']
  },

  dayjs: {
    locales: ['id'],
    plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat'],
    defaultLocale: 'id',
    defaultTimezone: 'Asia/Jakarta',
  },

  critters: {
    // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      // Default: 'media'
      preload: 'js-lazy',
    },
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
    '@nuxtjs/critters',
    "@pinia/nuxt",
    'nuxt-delay-hydration',
  ],
  delayHydration: {
    mode: 'manual',
    debug: process.env.NODE_ENV === 'development',
  },

  routeRules: {
    '/': { prerender: true }
  },

  build: {
    transpile: [
      "@nuxt/icon",
      "@iconify-json/fa6-solid",
      "@iconify-json/ph",
      "@iconify-json/solar",
    ]
  },

  compatibilityDate: "2024-08-12"
})