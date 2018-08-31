module.exports = {
  mode: "spa",
  /*
  ** Headers of the page
  */
  head: {
    title: 'cecc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: []
  },
  /*
  ** Meta Module
  */
  manifest: {
    short_name: "Cecc",
    name: 'Cecc App',
    lang: 'es',
    start_url: "index.html?launcher=true",
    background_color: "#303f9f",
    display: "standalone",
    orientation: "portrait-primary",
    theme_color: "#303f9f"
  },
  /*
  ** Meta Module
  */
  meta: {
    metaInfo: {
      htmlAttrs: {
        lang: 'es',
        amp: undefined
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    // ['@nuxtjs/localtunnel', { subdomain: 'cecc' }]
  ],
  /*
  **Vuetify configuration
  */
  vuetify: {
    theme: {
      error: '#FF8A80',
      primary: '#3f51b5'
    }
  },
  /*
  ** Css configuration
  */
  css: [
    '@/assets/css/main.scss',
    './node_modules/leaflet/dist/leaflet.css'
  ],
  // axios: {
  //   baseURL: 'https://stark-brushlands-17142.herokuapp.com/'
  // },

  auth: {
    // endpoints: {
    //   login:  { url: '/users' },
    //   logout: false,
    //   user:   { url: '/users/current' }
    // }
  },
  /*
  ** Plugings
  */
  plugins: [
    '~/plugins/database'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

