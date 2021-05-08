module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'hotpink'
    },
    name: 'Min app',
    themeColor: 'steelblue',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.coinbase.com/v2/currencies'
        }
      ]
    }
  }
}