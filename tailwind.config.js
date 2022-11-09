module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'toma-sb': ['toma-semibold', 'sans-serif'],
      'std-book': ['Std-book', 'sans-serif'],
      'toma-reg': ['toma-reg', 'sans-serif'],
      'std-black': ['Std-black', 'sans-serif']
    },

    extend: {
      colors: {
              uuu:'#565656',
             'pri': "#F6F6F6",
             'light-blue': "#00C2FF",
             'black': "#292D32",
             'dark-blue': '#001A77'
      }
    }
  
  },
  plugins: []
};
