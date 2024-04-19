// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
    checker: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: '',
  },
})
