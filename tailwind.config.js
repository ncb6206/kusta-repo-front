module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        main: '#0473FF',
        black: '#1A1A1A',
        gray1: '#4A4A4A',
        gray2: '#9E9E9E',
        gray3: '#E5E5E5',
        gray4: '#F7F7F7',
      },
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
