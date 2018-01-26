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
      { src: 'https://use.fontawesome.com/46e8cbad0b.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito' }
    ]
  },
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
