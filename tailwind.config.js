/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        'green-pea': {
          DEFAULT: '#1B5B31',
          50: '#5ECF85',
          100: '#4FCB79',
          200: '#37B964',
          300: '#2E9A53',
          400: '#247A42',
          500: '#1B5B31',
          600: '#0E301A',
          700: '#010402',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        cameo: {
          DEFAULT: '#DCC1AB',
          50: '#FAF6F3',
          100: '#F4ECE5',
          200: '#E8D6C8',
          300: '#DCC1AB',
          400: '#CCA483',
          500: '#BB875C',
          600: '#9D6B41',
          700: '#765031',
          800: '#4E3520',
          900: '#261A10',
          950: '#130D08',
        },
        'spring-wood': {
          DEFAULT: '#F5F0EC',
          50: '#FCFBF9',
          100: '#F5F0EC',
          200: '#E2D3C7',
          300: '#CEB6A2',
          400: '#BB997E',
          500: '#A87C59',
          600: '#836145',
          700: '#5F4632',
          800: '#3A2B1E',
          900: '#15100B',
          950: '#030201',
        },
        'ad-respect': '#003EDC',
      },
      fontFamily: {
        inter: ['inter', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif'],
      },
      backgroundImage: {
        hero: 'url("/assets/images/Hero.webp")',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'fade-out': 'fadeOut 300ms ease-in-out',
        'slide-in': 'slideIn 300ms ease-in-out',
        'slide-out': 'slideOut 300ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        slideIn: {
          '0%': {
            opacity: 0,
            width: 0,
          },
          '100%': {
            opacity: 1,
            width: '100%',
          },
        },
        slideOut: {
          '0%': {
            opacity: 1,
            width: '100%',
          },
          '100%': {
            opacity: 0,
            width: 0,
          },
        },
      },
      boxShadow: {
        gen: '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        '4xl': '28px',
      },
      fontSize: {
        '3xl-alt': [
          '1.75rem',
          {
            lineHeight: '1.15rem',
            letterSpacing: '-0.05em',
          },
        ],
        '4xl-alt': [
          '2.5rem',
          {
            lineHeight: '120%',
            letterSpacing: '-2px',
          },
        ],
      },
      gap: {
        18: '72px',
      },
    },
  },
  plugins: [],
};
