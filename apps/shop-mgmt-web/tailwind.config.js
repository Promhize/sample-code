module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "../../packages/ui/**/*.{ts,tsx,jsx,js}",
  ],
  plugins: [require("@tailwindcss/line-clamp")],
  // Specify other options here
  theme: {
    extend: {
      colors: {
        purpleX11: "#923ef4",
      },
      boxShadow: {
        largeCard: "12px 12px 30px 6px rgba(50,70,105,0.065)",
      },
    },
  },
}
