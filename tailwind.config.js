/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Softorange: "hsl(35, 77%, 62%)",
        btn: "hsl(5, 85%, 63%)",
        Offwhite: "hsl(36, 100%, 99%)",
        Grayishblue: "hsl(233, 8%, 79%)",
        nav: "hsl(236, 13%, 42%)",
        new: "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        default: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
