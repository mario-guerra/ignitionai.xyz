/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ignition-orange': '#FF6200',
        'deep-charcoal': '#1A2526',
        'ember-red': '#D32F2F',
        'cool-gray': '#B0BEC5',
        'spark-yellow': '#FFC107',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'source-sans': ['var(--font-source-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'circuit-pattern': "url('/images/circuit-pattern.svg')",
      },
      animation: {
        'spark': 'spark 2s ease-in-out infinite',
        'circuit-flow': 'circuit-flow 10s linear infinite',
      },
      keyframes: {
        'spark': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        'circuit-flow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
