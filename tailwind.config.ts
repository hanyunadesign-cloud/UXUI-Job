import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2fdfa",
          100: "#e6fbf4",
          200: "#bff4e4",
          300: "#99edd3",
          400: "#4de0b2",
          500: "#00d291",
          600: "#00b27b",
          700: "#009366",
          800: "#007450",
          900: "#00543a",
        },
        neutral: {
          25: "#fbfbfa",
          50: "#f7f7f6",
          100: "#eeeeec",
          200: "#e0e0dd",
          300: "#c7c7c2",
          400: "#a3a39c",
          500: "#82827a",
          600: "#63635c",
          700: "#4a4a44",
          800: "#33332f",
          900: "#1f1f1c",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(31, 31, 28, 0.04), 0 1px 8px rgba(31, 31, 28, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
