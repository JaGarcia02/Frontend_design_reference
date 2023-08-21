/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#887ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
    },
  },
  plugins: [],
};
