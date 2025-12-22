import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  srcDir: 'src/',
  css: ['~/assets/css/style.scss'],

  app: {
    baseURL: '/',
  },

  experimental: {
    sharedPrerenderData: true,
    viewTransition: true,
  },

  runtimeConfig: {
    public: {}
  },

  nitro: {
    publicAssets: [
      {
        dir: 'public'
      }
    ]
  },

  plugins: [
    '~/plugins/typekit.client'
  ],
  
  compatibilityDate: '2025-11-11',
});
