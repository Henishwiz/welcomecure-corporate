/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            theme: "#FAE006",
            black: "#000000",
          },
        },
        fontFamily: {
          lato: ["Lato", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  