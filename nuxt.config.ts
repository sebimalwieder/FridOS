import pkg from './package.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['@xterm/xterm/css/xterm.css', '~/assets/css/fonts.css'],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },
});
