/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        roll: {
          '0%': { transform: 'rotateX(180deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '75%': { transform: 'rotateX(-180deg)' },
          '90%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        roll: 'roll 1s infinite',
      },
    },
  },
  plugins: [],
}

