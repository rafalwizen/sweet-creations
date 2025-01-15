/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FB7185",
        },
        accent: {
          DEFAULT: "#FBBF24",
        },
        background: {
          DEFAULT: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
}

