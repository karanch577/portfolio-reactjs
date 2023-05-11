/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      opensans: ["Open Sans, serif"],
      code: ["Source Code Pro"]
    },
    screens: {
        'xs': '520px',
        'sm': '700px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'bg-main': '#20213E',
        'bg-dark': '#15152b',
        'text-light': '#f1f1f1'
      }
    },
  },
  plugins: [],
}
