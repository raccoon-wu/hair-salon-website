import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jockey: ['JockeyOne', 'sans-serif'],
        Bellota: ['BellotaText', 'sans-serif'],
        JostR: ['JostR', 'sans-serif'],
        JostM: ['JostM', 'sans-serif'],    
      },
      
      colors: {
        // setting up preset colors
        'nav-dark-gray': '#1c1c1c',
        'mid-gray': '#2E2E2E',
        'light-gray': 'E9E9E9',

        'dark-gold': '#BD8E4D',
        'lighter-gold': '#FCE295',
      },

      screens:{
        // adding custom height breakpoints, 'raw' key allows one to define custom in media queries outside of predefined ones such as 'sm', 'lg' etc.
        'shorter-screen': {'raw': '(max-height:950px)'},
        'taller-screen': {'raw': '(min-height:951px)'},
      },
    },
  },
  plugins: [],
};
export default config;
