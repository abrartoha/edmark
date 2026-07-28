import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ----------------------------------------------------------------
        // Deep Eucalypt & Brass. Semantic names, not colour names, so a
        // future palette change is a single edit in this block.
        // ----------------------------------------------------------------
        ink: "#0E1F1A", // near-black, green undertone: headings
        copy: "#3D4B47", // body text on paper
        eucalypt: {
          DEFAULT: "#154D3C", // primary: buttons, links, active states
          deep: "#0F3A2D", // hover / pressed
          light: "#8FBFA9", // light-on-dark accent (hero signature phrase)
        },
        brass: {
          DEFAULT: "#C79A3C", // accent, used sparingly
          deep: "#B0851F", // hover on dark
        },
        sage: "#5F6F6A", // muted text, captions, eyebrow labels
        mist: "#B8C7C1", // body + links on wash-deep
        paper: {
          DEFAULT: "#FBFAF7", // page background
          sunk: "#F3F1EA", // wash-paper terminus, subtle fills
        },
        line: "#DFDCD4", // hairline borders

        // ----------------------------------------------------------------
        // Compatibility ramp. The old teal `brand-*` scale is remapped onto
        // the new palette so any class not yet swept still lands in-system
        // instead of resurrecting the teal. Prefer the semantic names above
        // for new work; this ramp is a migration aid, not a design token.
        // ----------------------------------------------------------------
        brand: {
          50: "#F3F1EA",
          100: "#DFDCD4",
          200: "#C9C6BC",
          300: "#A8B5AF",
          400: "#8FBFA9",
          500: "#2F6B55",
          600: "#1D5B47",
          700: "#154D3C",
          800: "#123F31",
          900: "#0E1F1A",
          950: "#0A1713",
        },
        mint: "#8FBFA9",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        // Tonal only. All three share the same 165deg light direction.
        "wash-deep": "linear-gradient(165deg, #154D3C 0%, #0E1F1A 100%)",
        "wash-paper": "linear-gradient(165deg, #FBFAF7 0%, #F3F1EA 100%)",
        // Functional scrims. These follow the text, not the light, so they do
        // not share the 165deg axis the decorative washes above use.
        // md and up: headline is left-aligned, so the scrim runs horizontally
        // and the right side stays bright enough to read as video.
        "scrim-hero":
          "linear-gradient(100deg, rgba(14,31,26,0.92) 0%, rgba(14,31,26,0.82) 38%, rgba(14,31,26,0.30) 68%, rgba(14,31,26,0.15) 100%)",
        // Below md the text spans the full width, so the scrim is vertical.
        "scrim-hero-mobile":
          "linear-gradient(to top, rgba(14,31,26,0.90) 0%, rgba(14,31,26,0.55) 50%, rgba(14,31,26,0.25) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
