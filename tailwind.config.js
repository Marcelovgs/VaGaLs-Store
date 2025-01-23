/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"], // Aponta para todos os HTML e JS na raiz
  theme: {
    extend: {
      colors: {
        colorHeader: '#E3E3E3', // Cor personalizada para o header
      },
      spacing: {
        '15': '15px', // Adicionando padding de 15px
        '1': '1px',    // Adicionando padding de 1px
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Adicionando a fonte Montserrat
      },
    },
  },
  plugins: [],
};
