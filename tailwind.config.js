/**@type {import('tailwindcss').Config}*/
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{css}"],
    theme: {
      extend: {
        fontFamily: {
            title: ['Righteous', 'cursive'],
            body: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [require("daisyui")],
  }
  