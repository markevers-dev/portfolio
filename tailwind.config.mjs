/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,jsx,mdx}", "./app/**/*.{js,jsx,mdx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          100: "#ebeefa",
          200: "#c3cdef",
          300: "#9aace4",
          400: "#728ada",
          500: "#4a69cf",
          600: "#304fb5",
          700: "#253e8d",
          800: "#1b2c65",
          900: "#101a3c",
        },
      },
    },
  },
  darkMode: "selector",
  plugins: [require("tailwindcss-motion")],
};
