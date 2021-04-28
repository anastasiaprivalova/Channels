const tailwindcss = require('tailwindcss');

module.exports = {
    css: {
      loaderOptions: {
        postcss: {
            plugins: [tailwindcss]
        }
      }
    }
  }