/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: 'var(--unnamed-color-705aaa)',
          secondary: 'var(--unnamed-color-cbc8d4)',
          activestate1: 'var(--activestate_bg_1)',
          activestate2: 'var(--activestate_bg_2)',
          success: 'var(--unnamed-color-0bd984)',
          neutral: 'var(--unnamed-color-707070)',
          background: 'var(--unnamed-color-f6f6f6)',
          accent: 'var(--unnamed-color-ff6200)',
          black: 'var(--unnamed-color-000000)',
          white: 'var(--unnamed-color-ffffff)',
        },
        fontFamily: {
          manrope: ['var(--unnamed-font-family-manrope)', 'sans-serif'],
        },
        fontSize: {
          sm: 'var(--unnamed-font-size-14)',
          base: 'var(--unnamed-font-size-18)',
          lg: 'var(--unnamed-font-size-24)',
        },
        lineHeight: {
          normal: 'var(--unnamed-line-spacing-19)',
          relaxed: 'var(--unnamed-line-spacing-24)',
          loose: 'var(--unnamed-line-spacing-33)',
        },
        fontWeight: {
          normal: 'var(--unnamed-font-weight-normal)',
          bold: 'var(--unnamed-font-weight-bold)',
          extrabold: 'var(--unnamed-font-weight-800)',
        },
      },
    },
  },
  plugins: [],
}

