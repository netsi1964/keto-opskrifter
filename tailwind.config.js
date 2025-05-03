/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_posts/*.{html,md}',
    './_opskrifter/*.{html,md}',
    './_blog/*.{html,md}',
    './*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',    // Dyb orange
        secondary: '#FF7043',  // Lys orange
        accent: '#F4511E',     // Mørk orange
        background: '#FBE9E7', // Meget lys orange
        'custom-text': '#424242', // Mørk grå
      },
      fontFamily: {
        sans: ['Avenir', 'Montserrat', 'Corbel', 'URW Gothic', 'source-sans-pro', 'sans-serif'],
      },
      fontWeight: {
        thin: '200',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 