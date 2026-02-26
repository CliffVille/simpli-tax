/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('./src/assets/background.png')",
        imageOne: "url('./src/assets/image.svg')",
        imageTwo: "url('./src/assets/imageTwo.svg')",
        imageThree: "url('./src/assets/imageThree.svg')",
        imageFour: "url('./src/assets/imageFour.svg')",
        imageFive: "url('./src/assets/imageFive.svg')",
        imageSix: "url('./src/assets/imageSix.svg')",
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};