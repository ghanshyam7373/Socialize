module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'josefin' : ['Josefin sans', 'ui-sans-serif']
    },
    colors:{
      'primary':'#FFA250'
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}