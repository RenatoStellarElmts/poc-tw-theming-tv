/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      borderRadius: {
        DEFAULT: "var(--rounded)",
      },
    },
  },
  plugins: [],
};
