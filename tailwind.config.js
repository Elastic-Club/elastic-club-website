// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  important: true,
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
        akira: ['Akira', 'sans-serif'],
        malinton: ['Malinton', 'sans-serif'],
        utm: ['UTM-Avo', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef2ff',
          100: '#fde6ff',
          200: '#fbc9ff',
          300: '#f89cff',
          400: '#f460ff',
          500: '#dc1fff', // Solana Purple
          600: '#c016e6',
          700: '#a111bf',
          800: '#85109b',
          900: '#6f117f',
          950: '#4a0058',
        },
        secondary: {
          50: '#f0fff9',
          100: '#dafff0',
          200: '#b8ffdf',
          300: '#7effc6',
          400: '#3cffa2',
          500: '#14f195', // Solana Green
          600: '#0bc779',
          700: '#099d62',
          800: '#0d7c50',
          900: '#0c6543',
          950: '#003924',
        },
        accent: {
          500: '#00FFA3', // Solana Blue/Cyan
        },
        gray: colors.zinc,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
