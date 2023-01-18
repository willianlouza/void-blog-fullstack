/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: [`var(--inter-font)`, ...fontFamily.sans],
        serif: [`var(--roboto-slab-font)`, ...fontFamily.serif]
      },
      colors: {
        black: '#121212'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
