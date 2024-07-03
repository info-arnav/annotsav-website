/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryColor-1": "#365e32",
        "primaryColor-2": "#81a263",
        "primaryColor-3": "#e7d37f",
        "primaryColor-4": "#fd9b63",
        "primaryColor-5": "#4C9A44",
        "secondaryColor-1": "#6f4e37",
        "secondaryColor-2": "#a67b5b",
        "secondaryColor-3": "#fed8b1",
        "secondaryColor-4": "#ecb176",
      },
      fontFamily: {
        raleway: ["Raleway, sans-serif"],
        montserrat: ["Montserrat, sans-serif"],
      },
      padding: {
        'auto': 'auto',
      },
    },
  },
  plugins: [],
};
