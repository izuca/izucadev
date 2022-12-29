module.exports = {
  content: ['./src/**/*.{njk,md}'],
  theme: {
    colors: {
      'vermelho': '#8C072B',
      'preto-900': '#0D0D0D',
      'preto-700': '#1A1A1A',
      'branco-900': '#F2F2F2',
      'branco-600': '#F2F2F2b3',
    },
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif'
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  
};
