/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: '#0085E8',
          dark: '#005FA8',
          deep: '#071A2A'
        },
        gold: '#C5A059',
        canvas: '#F8F8F7',
        ink: '#0C1420'
      },
      boxShadow: {
        architectural: '0 24px 70px rgba(12, 20, 32, 0.10)',
        'architectural-dark': '0 30px 80px rgba(0, 0, 0, 0.28)'
      }
    }
  },
  plugins: []
}
