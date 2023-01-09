/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const color = {
  yellow: '#F6BD61',
  purple: 'A08CE7',
  red: 'E06262',
  'dark-gray': '1C1D1F',
  gray: '#666869',
  'ligth-gray': '#8E8E98',
  white: '#F1F1F2',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
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
