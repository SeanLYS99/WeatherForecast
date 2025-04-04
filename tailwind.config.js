// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        card: "var(--card-color)",
        gray: "var(--gray-color)",
        text: {
          main: "#FFFFFF",
          muted: "#B0B0B0",
        },
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(135deg, #2E1B5B 0%, #000000 100%)",
        "brand-gradient": "linear-gradient(90deg, #FFFFFF 0%, #FF6B9E 100%)",
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
