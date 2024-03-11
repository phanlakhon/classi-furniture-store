/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      "Playfair-Display": ["Playfair Display", "sans-serif"],
    },
    extend: {
      colors: {
        footer: "#0E0B08",
      },
    },
  },
  plugins: [],
};
