/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      'cell': '431px',
    },
    extend: {
      color:{
        'paradox-color': '#BE7DDD',
      },
      width:{
        '550':'550px',
        '70%':'70%',
        '545':'545px',
      },
      heigh:{
        '420':'420px',
      }
    },
  },
  plugins: [flowbite.plugin(),],
  
};

