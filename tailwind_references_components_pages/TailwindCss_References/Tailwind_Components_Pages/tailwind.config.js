/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins', sans-serif",
      roboto: "Roboto', sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      backgroundImage: {
        hero: "url('./src/images/Ecomerce/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
