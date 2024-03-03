/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('../public/images/hero_bg.jpg')",
        "gradient-radial":
          "radial-gradient(circle at bottom, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "auto-fill-160": "repeat(auto-fill, minmax(160px, 1fr))",
        "auto-fit-160": "repeat(auto-fit, minmax(160px, 1fr))",
      },
    },
  },
  plugins: [],
};
