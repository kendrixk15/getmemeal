/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainBlue:"#134B8A",
        minorBlue:"#0F1E56",
        notiRed: "#F7685B",
        borderLine:"#E5E5E5",
        gray:"#605c5c",
        midGray:"#9E9E9E",
        lightGray: "#e0e0e0",
        disableGray:"#C3BEBB",
        innerPageBg:"#C4D3E9"
      },
      fontFamily:{
        kanit : "Kanit"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
