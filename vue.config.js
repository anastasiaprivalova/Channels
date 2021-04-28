const tailwindcss = require('tailwindcss');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Channels/' : '/',
    css: {
      loaderOptions: {
        postcss: {
            plugins: [tailwindcss]
        }
      }
    }
  }