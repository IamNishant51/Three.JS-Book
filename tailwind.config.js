module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '10xl': '7rem',
        '12xl': '9rem',
        '13xl': '10rem',
      },
      animation: {
        'horizontal-scroll': 'scrollX 60s linear infinite',
        'horizontal-scroll-2': 'scrollX 60s linear infinite reverse',
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
