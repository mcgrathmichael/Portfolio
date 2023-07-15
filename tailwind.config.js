/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#1A2C5B",
      blue: "#3E4E88",
      purple: "#7971EA",
      grey: "#B8DFF0",
      green: "#98FFB5",
      light: "#B8DFF0",
      pink: "#EA98FF",
      gold: "#ffff00",
      yellow: "#fff700",
      darkpink: "#f5009b",
      sky: "#2ffffff5",
      orange: "#ff600a",
    },
    extend: {
      animation: {
        "pulse-slow": "pulse 5s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "that-glow":
          "box-shadow: inset 0px -6px 4px rgba(152, 255, 181, 0.62);",
      },
    },
  },
  plugins: [],
};
