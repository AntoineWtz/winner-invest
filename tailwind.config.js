/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C4A668", // Titre et boutons
        secondary: "#4e4637", // Fond sombre
        accent: "#46bbad", // Bouton vert clair
        darkAccent: "#008578", // Accent sombre
        neutral: "#b4aa99", // Gris neutre
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        manrope: ['"Manrope"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
