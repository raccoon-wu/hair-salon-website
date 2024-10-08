import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Screen_Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Mobile_Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jockey: ['JockeyOne', 'sans-serif'],
        Bellota: ['BellotaText', 'sans-serif'],
        JostR: ['JostR', 'sans-serif'],
        JostM: ['JostM', 'sans-serif'],
        JostL: ['JostL', 'sans-serif'],    
      },
      
      colors: {
        // setting up preset colors
        'nav-dark-gray': '#1c1c1c',
        'mid-gray': '#2E2E2E',
        'light-gray': 'E9E9E9',

        'dark-gold': '#BD8E4D',
        'lighter-gold': '#FCE295',
        'warm-gold': '#F39D3A',
      },

      screens:{
        // adding custom height breakpoints, 'raw' key allows one to define custom in media queries outside of predefined ones such as 'sm', 'lg' etc.
        'shorter-screen': {'raw': '(max-height:950px)'},
        'taller-screen': {'raw': '(min-height:951px)'},
        'sm-phone': {'min': '320px', 'max': '479px'},  // Between 320px and 479px
        'md-phone': {'min': '480px', 'max': '767px'},  // Between 480px and 767px
      },
    },
  },
  plugins: [],
};
export default config;
