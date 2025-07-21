import daisyui from 'daisyui';
import flowbite from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3192DF',
        secondary: '#16A352',
        accent: '#919695',
      },
    },
  },
 plugins: [daisyui, flowbite],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3192DF",
          secondary: "#16A352",
          accent: "#919695",
        },
      },
    ],
  },
};