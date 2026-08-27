import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        accent: {
          DEFAULT: "#00f2fe",
          emerald: "#10b981",
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          blue: "#3b82f6",
        },
      },
      animation: {
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.4", filter: "blur(20px)" },
          "50%": { opacity: "0.8", filter: "blur(30px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("light", ".light &");
    }),
  ],
};
export default config;
