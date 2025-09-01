/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandBg: "#f1f1f6",
        brandPrimary: "#4c4c96",
        brandAccent: "#323261"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
