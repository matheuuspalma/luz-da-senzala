/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          50: '#FDF8F3',
          100: '#FAEBDC',
          200: '#F3D4B3',
          300: '#E8B581',
          400: '#DE964F',
          500: '#D4802A',
          600: '#8B4513',
          700: '#6B3610',
          800: '#4B270D',
          900: '#2B1709',
        },
        secondary: {
          DEFAULT: '#DAA520',
          50: '#FDF8EF',
          100: '#F9EDD0',
          200: '#F2DAA0',
          300: '#EBC871',
          400: '#E4B541',
          500: '#DAA520',
          600: '#B8891B',
          700: '#8B6915',
          800: '#5D4610',
          900: '#2E230A',
        },
        background: '#F5F5F5',
        card: '#FEF5E7',
      },
      textColor: {
        primary: '#333333',
        secondary: '#666666',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
