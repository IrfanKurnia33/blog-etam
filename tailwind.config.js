/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)'],
        serif: ['var(--font-ibm-plex-serif)'],
        mono: ['var(--font-azeret-mono)'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: 'var(--link-color)',
              '&:hover': {
                color: 'var(--link-color)',
                opacity: 0.8,
              },
            },
            h1: {
              color: 'var(--title-color)',
              fontFamily: 'var(--font-sora)',
            },
            h2: {
              color: 'var(--subheading-color)',
              fontFamily: 'var(--font-sora)',
            },
            h3: {
              color: 'var(--subheading-color)',
              fontFamily: 'var(--font-sora)',
            },
            h4: {
              color: 'var(--subheading-color)',
              fontFamily: 'var(--font-sora)',
            },
            p: {
              fontFamily: 'var(--font-ibm-plex-serif)',
            },
            strong: {
              color: 'var(--foreground)',
            },
            code: {
              color: 'var(--foreground)',
              fontFamily: 'var(--font-azeret-mono)',
            },
            pre: {
              color: 'var(--foreground)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              fontFamily: 'var(--font-azeret-mono)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 