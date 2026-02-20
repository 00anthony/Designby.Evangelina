import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
        handwriting: ["'Caveat'", "cursive"],
        display: ["'Abril Fatface'", "serif"],
        mono: ["'Special Elite'", "monospace"],
        monsieur: ["var(--font-monsieur)"],
      },
      colors: {
        cream: "#f5f0e8",
        "cream-dark": "#ede8dc",
        ink: "#1a1209",
        "ink-light": "#3d3020",
        gold: "#d4a843",
        "gold-light": "#f0cc7a",
        coral: "#e85d3f",
        sage: "#7a9e7e",
        sky: "#4a9cc8",
        blush: "#e8b4b8",
        mustard: "#e8c547",
        lavender: "#b8a9d4",
      },
      rotate: {
        "1": "1deg",
        "2": "2deg",
        "3": "3deg",
        "-1": "-1deg",
        "-2": "-2deg",
        "-3": "-3deg",
      },
      boxShadow: {
        scrapbook: "3px 3px 12px rgba(26,18,9,0.2), 6px 6px 0px rgba(26,18,9,0.05)",
        "scrapbook-lg": "6px 6px 24px rgba(26,18,9,0.25), 10px 10px 0px rgba(26,18,9,0.08)",
        tape: "2px 2px 8px rgba(26,18,9,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
