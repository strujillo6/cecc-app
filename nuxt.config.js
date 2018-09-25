module.exports = {
  /*
  ** Manifiest Module
  */
  manifest: {
    short_name: "Cecc",
    name: 'Cecc App',
    lang: 'es',
    display: "standalone",
    orientation: "portrait",
    background_color: "#303f9f",
    theme_color: "#283593",
    // start_url: "./?launcher=true",
  },
  /*
  ** Meta Module
  */
  meta: {
    metaInfo: {
      title: 'Cecc-App',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [
        { innerHTML: 'Esta Web App, requiere del uso de Javascript para un correcto funcionamiento.' }
      ]
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
    'nuxt-robots-module'
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
  /*
  ** Axios configuration
  */
  axios: {
    baseURL: 'http://127.0.0.1:3333/api'
  },
  /*
  ** Auth configuration
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },
  /*
  ** Plugings
  */
  plugins: [
    '~/plugins/database'
  ],
  /*
  ** serverMiddleware
  */
  serverMiddleware: [ 'redirect-ssl' ],
  /*
  ** Plugings
  */
  'nuxt-robots-module': {
    /* module options */
    UserAgent: '*',
    Disallow: '/',
  },
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
  },
}

