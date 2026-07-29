import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette pulled from the Edmark Education card
        brand: {
          50: "#e9fbf4",
          100: "#c6f5e2",
          200: "#8fead0",
          300: "#4fdcb7",
          400: "#1ecfa0",
          500: "#12a085", // core emerald
          600: "#0e8570",
          700: "#0d6b5b",
          800: "#0b4f43", // deep teal (card footer)
          900: "#083a31",
          950: "#052721",
        },
        mint: "#1de9b6",
        cyan: "#22d3ee",
        ink: "#0a1f1a",

        // Course matcher palette. Added additively: no existing class uses
        // these names, so the rest of the site is unaffected. `ink` above is
        // reused rather than redefined, since globals.css sets body text from
        // it and changing it would recolour every page.
        eucalypt: { DEFAULT: "#154D3C", deep: "#0F3A2D" },
        brass: "#C79A3C",
        sage: "#5F6F6A",
        paper: { DEFAULT: "#FBFAF7", sunk: "#F3F1EA" },
        line: "#DFDCD4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1de9b6 0%, #12a085 50%, #22d3ee 100%)",
        "brand-diagonal": "linear-gradient(120deg, #0b4f43 0%, #0d6b5b 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 79, 67, 0.25)",
        glow: "0 20px 60px -20px rgba(18, 160, 133, 0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
