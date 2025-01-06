/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'imageOne': "url('./assets/image.svg')",
        'imageTwo': "url('./assets/imageTwo.svg')",
        'imageThree': "url('./assets/imageThree.svg')",
        'imageFour': "url('./assets/imageFour.svg')",
        'imageFive': "url('./assets/imageFive.svg')",
        'imageSix': "url('./assets/imageSix.svg')",
      },
        fontFamily: {
          kumbh: ['Kumbh Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
