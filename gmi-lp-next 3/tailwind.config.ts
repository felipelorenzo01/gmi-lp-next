import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gmi: {
          red: "#d51f26",
          "red-dark": "#b3171d",
          navy: "#1d2a52",
          blue: "#2f4fb0",
          paper: "#f6f4ef",
        },
      },
      fontFamily: {
        display: ["var(--font-condensed)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
};
export default config;
