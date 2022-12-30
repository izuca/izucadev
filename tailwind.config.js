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
      width: {
        '22p': '22%',
        '981p' : '981px',
      },
      height: {
        '100p': '28rem',
      },
      fontFamily: {
        sans: 'Montserrat, sans-serif'
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  
};
