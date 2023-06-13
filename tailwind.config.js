/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*js", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-bootsrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    }),
  ],
}

