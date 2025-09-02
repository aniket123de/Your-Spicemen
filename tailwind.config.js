/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#FAF7F3',   // lightest shade
          100: '#F5F0EA',  // very light
          200: '#FFF9EC',  // main color
          300: '#E8DDD0',  // slightly darker
          400: '#DDD0BD',  // medium light
          500: '#D1C2AA',  // medium
          600: '#C4B497',  // medium dark
          700: '#B5A584',  // darker
          800: '#A39471',  // very dark
          900: '#8F825E',  // darkest
        },
        'text-brown': '#775636'
      },
      fontFamily: {
        'dancing': ['var(--font-dancing)', 'cursive'],
        'playfair': ['var(--font-elegant)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'elegant': ['var(--font-elegant)', 'serif'],
      }
    },
  },
  plugins: [],
};
