module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    script: [
      { src: 'https://use.fontawesome.com/46e8cbad0b.js' },
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-97620715-1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito' }
    ]
  },
  plugins: [
    { src: '~/plugins/gtag', ssr: false }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#209cee' },
  /*
  ** Customize app manifest
  */
  manifest: {
    background_color: '#209cee',
    short_name: 'Debate3D',
    theme_color: '#209cee',
    name: 'Debate3D - Uma nova experiência de debate'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Workbox
  */
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://use.fontawesome.com/.*'
      },
      {
        urlPattern: 'https://fonts.googleapis.com/.*'
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*'
      }
    ]
  }
}
