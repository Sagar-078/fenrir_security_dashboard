/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'caret-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          'from, to': { opacity: 0 },
          '50%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}

