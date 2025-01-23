/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./script/*.js"], // Aponta para todos os HTML na raiz e todos os JS na pasta script
  theme: {
    extend: {
      colors: {
        colorHeader: '#E3E3E3', // Cor personalizada para o header
      },
      spacing: {
        '15': '15px', // Adicionando padding de 15px
        '1': '1px',   // Adicionando padding de 1px
        '500': '500px', // Adicionando altura de 500px
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Adicionando a fonte Montserrat
      },
    },
  },
  plugins: [],
};
