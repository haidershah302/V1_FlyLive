// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' },
    layoutTransition: { name: 'slide-right', mode: 'out-in' }
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },



  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@formkit/auto-animate/nuxt',
  ],
})