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
      'primary':'#FFA250',
      'light-orange': '#FFE9D6'
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}