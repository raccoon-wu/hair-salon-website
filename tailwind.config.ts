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
        custom: ['JockeyOne', 'sans-serif'],  
      },
      
      colors: {
        // setting up preset colors
        'nav-dark-gray': '#121111',
        'mid-gray': '#2E2E2E',
        'light-gray': 'E9E9E9',

        'dark-gold': '#BD8E4D',
        'lighter-gold': '#FCE295',

        'body-text': '#D5D1CA',
      },
    },
  },
  plugins: [],
};
export default config;
