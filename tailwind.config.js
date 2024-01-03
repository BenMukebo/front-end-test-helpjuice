/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xm: "375px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1480px",
    },
    extend: {
      colors: {
        'primary': '#0d121c',
        'secondary': '#3565a9',
        'text-color': '#4d5562',
        'input-color': '#9da3ae',
      },
      opacity: {
        '64': '.64',
      },
    },
  },
  plugins: [],
}

