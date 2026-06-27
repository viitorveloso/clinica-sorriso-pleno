import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2e4a",
          50: "#eef2f7",
          900: "#142339",
        },
        turquoise: {
          DEFAULT: "#4db8c4",
          50: "#eaf7f9",
          600: "#3a9aa6",
        },
        cinza: "#f5f7fa",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
