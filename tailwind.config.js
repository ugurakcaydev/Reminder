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
      screens: {
        'mobile': '401px',

        'tablet': '851px',

        'laptop1': '1025px',

        'laptop2': '1301px',

        'desktop1': '1537px',

        'desktop2': '1921px',

        '2kmonitor': '2561px',
      },


    }
  },
  plugins: [require("daisyui")],
};
