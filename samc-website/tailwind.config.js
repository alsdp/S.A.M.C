/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // AJOUT ICI : On définit un écran "xs" (extra small) pour ton format 280px
      screens: {
        'xs': '280px', 
      },
      // Fin de l'ajout

      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}