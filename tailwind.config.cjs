/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend:{
    fontFamily:{
      'monsrat' : ['Montserrat'],
      'popins' : ['Poppins', 'sans-serif']
    }
   }
  },
  plugins: [],
}
