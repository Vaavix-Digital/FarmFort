/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilda': ['"Gilda Display"', 'serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/Hero.jpeg')",
      },
    },
  },
  plugins: [],
}

