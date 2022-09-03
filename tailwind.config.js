/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '200': '50rem',
      },
      height: {
        '100': '35rem',
      }
    },
  },
  plugins: [require("daisyui")],
}
