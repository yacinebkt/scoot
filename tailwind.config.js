
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        Poppins : "Poppins", 
      },
      colors : {
        primary : "#3E82FC",
      },
      backgroundImage : {
        Hero : "url(/Background.png)",
        Cover : "url(/challenges/cover.JPG)",
      },

      // lineClamp :{
      //   10:'10',
      //   12:'12',
      //   4:'4'
      // }
      
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),

  ],
}
