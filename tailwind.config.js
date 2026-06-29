/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather-sans': ['var(--font-merriweather-sans)', 'sans-serif'],
      },
      colors: {
        gold: '#c9a84c',
        navy: '#0a1628',
      },
    },
  },
  plugins: [],
}