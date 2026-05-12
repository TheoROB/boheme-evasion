/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C4A77D',
        secondary: '#E8D5B7',
        cta: '#8B7355',
        background: '#FAF7F2',
        text: '#4A3728',
        muted: '#6B5344',
        accent: '#D4AF37',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(74, 55, 40, 0.12)',
        'card': '0 8px 30px rgba(74, 55, 40, 0.08)',
      },
    },
  },
  plugins: [],
}