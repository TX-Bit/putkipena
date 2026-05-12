/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#030d1c',
          900: '#071730',
          800: '#0c2548',
          700: '#133263',
          600: '#1a417f',
          500: '#1e4d96',
          400: '#2a63bb',
          300: '#5b8fd4',
          200: '#93b8e8',
          100: '#daeaf8',
          50:  '#f0f7ff',
        },
        accent: {
          600: '#c2410c',
          500: '#ea580c',
          400: '#f97316',
          300: '#fb923c',
          100: '#ffedd5',
          50:  '#fff7ed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(7,23,48,0.08)',
        'card-hover': '0 12px 40px rgba(7,23,48,0.15)',
        'cta': '0 4px 20px rgba(234,88,12,0.35)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
