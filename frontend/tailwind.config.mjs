/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          primary: '#2E7D32',
          'primary-dark': '#1B5E20',
          'primary-light': '#4F8E4B',
          secondary: '#4F6B1D',
          'secondary-dark': '#3A4F15',
          leaf: '#3E9B34',
          gold: '#C9A227',
          'gold-dark': '#A88520',
          lime: '#CDD535',
        },
        // Neutral Colors
        neutral: {
          cream: '#F7F4E6',
          'cream-dark': '#EDE9D8',
          charcoal: '#1F2A1A',
          'charcoal-light': '#2D3D26',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
    },
  },
  plugins: [],
};
