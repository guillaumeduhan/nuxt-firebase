export default {
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/custom.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/vuelidate" }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/eslint-module"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/proxy",
    [
      "@nuxtjs/firebase",
      {
        config: {
          // Add your config firebase's data here
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
        },
      },
    ],
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
    friendlyErrors: false,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
  server: {
    port: 3000,
  },
  ssr: false
}
