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
        "hero-img":
          "url('https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?q=80&w=3891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
