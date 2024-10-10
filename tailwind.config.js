/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const colorLight = {
  'color1-white': '#e27d60',
  'color2-white': '#85dcb0',
  'color3-white': '#e8a87c',
  'color4-white:': '#c38d9e',
  'color5-white': '#41b3a3',
}

const colorDark = {
  'color1-dark': '#e27d60',
  'color2-dark': '#85dcb0',
  'color3-dark': '#e8a87c',
  'color4-dark:': '#c38d9e',
  'color5-dark': '#41b3a3',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      test: ['DM Sans'],
    },
    extend: {
      colors: {
        ...colorLight,
        ...colorDark,
        'ligth-gray': '#8E8E98',
        'error-color': '#fa3e3e',

        primary: '#FF7652',
        purple: '#6C5ECF',
        'light-blue': '#32A8E2',
      },
    },

    keyframes: {
      fade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)',
        },
        '50%': {
          opacity: 0.3,
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)',
        },
      },
    },
    animation: {
      fade: 'fade 0.4s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out',
    },
  },
  plugins: [
    // require('@headlessui/tailwindcss'),
    // Or with a custom prefix:
    // require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
}
