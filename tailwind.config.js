/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D4AF37', // Example gold
        'brand-dark': '#1a1a1a', // Example dark
      },
    },
  },
  plugins: [],
}
