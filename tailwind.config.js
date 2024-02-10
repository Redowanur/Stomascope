/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cream:{
          300: '#FFFAF1',
        },
        leaf:{
          300: '#50B16A',
        }
      },
      height:{
        hero: '510px',
        100: '600px',
        110: '900px',
        90: '93%'
      },
      width:{
        100: '1180px',
        97: '500px'
      },
      fontFamily:{
        redowan: ['Lexend Tera'],
        ubuntu: ['Ubuntu']
      }
    },
  },
  plugins: [],
}

