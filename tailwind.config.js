/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        source: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        purple: {
          600: '#7C3AED',
        },
      },
    },
  },
  plugins: [],
}
