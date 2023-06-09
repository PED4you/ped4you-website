/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        PED: {
          yellow: {
            DEFAULT: "#F2DC5D",
            secondary: "#F5C076",
          },
          orange: {
            DEFAULT: "#FF521B",
            secondary: "#FC60A8",
            tertiary: "#FFD5FF",
          },
          purple: {
            DEFAULT: "#5438DC",
            secondary: "#6665DD",
            tertiary: "#92DCEF",
          },
          green: {
            DEFAULT: "#59CD90",
            secondary: "#2D936C",
          },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
