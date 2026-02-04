/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gryffindor: '#740001',
        ravenclaw: '#0E1A40',
        hufflepuff: '#FFD700',
        slytherin: '#1A472A',
        gold: '#DAA520',
      },
    },
  },
  plugins: [],
}
