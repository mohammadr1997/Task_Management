// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-header": ["custom-font-header"],
        "custom-text": ["custom-font-text"],
      },
    },
  },
  plugins: [],
};
