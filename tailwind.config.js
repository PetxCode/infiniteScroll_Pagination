/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["athletics"],
        main2: ["athleticsBold"],
        astro: ["astromax"],
        lebla: ["lebla"],
        bugis: ["bugis"],
      },
    },
  },
  plugins: [],
};
