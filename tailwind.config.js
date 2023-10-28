/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lumanosimo: ['Lumanosimo', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        golden: '#ffc107',
      },


    }
  },
  plugins: [require("daisyui")],
};
