module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        innovex: {
          50: '#fbf8ff',
          100: '#f5f2ff',
          200: '#efe9ff',
          300: '#dfd6ff',
          500: '#bfa8ff',
          700: '#8f6cff',
        }
      },
      blur: { xs: '6px' },
      boxShadow: {
        soft: '0 6px 30px rgba(20,18,30,0.06)',
        glow: '0 8px 40px rgba(160,120,255,0.12)'
      },
    },
  },
  plugins: [],
}
