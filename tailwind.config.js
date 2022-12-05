module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
};

/** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
      extend: {},
    },
    plugins: [],
}