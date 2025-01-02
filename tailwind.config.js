/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  // presets: [
  //   require('@acmecorp/tailwind-base')
  // ],

  content: [
    "./app/**/*.{html,js}",
    './app/index.html',
  ],

  theme: {
    extend: {
      tabSize: {
        1: '1',
        2: '2',
        4: '4',
        8: '8',
      }
    },
  },

  plugins: [
    //External plugins
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),

    // Custom plugins
    plugin(function({ addUtilities }) {
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      });
    }),

    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          tab: (value) => ({
            tabSize: value
          }),
        },
        { values: theme('tabSize') }
      )
    }),

    plugin(function({ addComponents }) {
      addComponents({
        '.custom-btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.custom-btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.custom-btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    }),

    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],

  // This is especially useful when using Tailwind with existing CSS file in a project
  // prefix: 'tw-',

  // To generate utilities as `!important`, set the `!important` key in your configuration options to `true`:
  // important: true,
};

