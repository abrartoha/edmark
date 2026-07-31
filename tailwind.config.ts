import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ---------------------------------------------------------------
      // Deep Teal & Brass. Teal carries the brand, ink carries the words,
      // brass is decoration and never a button fill.
      // ---------------------------------------------------------------
      colors: {
        ink: "#062421", // body copy, footer, dark surfaces
        teal: { 500: "#17706A", 700: "#0F4A47" }, // 700 fills, 500 hover/links
        mint: { 100: "#D9F2EA", 300: "#7FD4C1" }, // section tint / chips, tags
        sand: { 200: "#F1E6CC" }, // warm alternating band

        // Two golds, two jobs: brass sits on dark, brass-deep on light.
        // Brass on paper is 2.3:1, so it is decoration only, never small text.
        //
        // `light` is the sheet's dark-mode brass. Plain brass on Teal 700 is
        // 4.2:1, which the sheet itself rates large-text-only, and the footer
        // link hovers are small text over exactly that. Lifting them to this
        // value takes them to 5.3:1 at the worst point of the footer gradient.
        brass: { DEFAULT: "#C6A25C", deep: "#8F6B21", light: "#D9B871" },

        paper: { DEFAULT: "#FBFAF7", sunk: "#F1E6CC" },
        line: "#DCE5E0", // hairline borders
        sage: "#5F6F6A", // muted text, captions, eyebrows
        mist: "#B9C6C1", // body + links on dark
        copy: "#3A4A45", // body text on paper

        eucalypt: {
          DEFAULT: "#0F4A47", // Teal 700
          light: "#7FD4C1", // Mint 300, light-on-dark accent
        },

        status: {
          success: "#2E7D5B",
          warning: "#C77E1E",
          danger: "#B3392F",
          info: "#2A6E8F",
        },

        // Legacy ramp. 19 pages still reference brand-*, so rather than edit
        // 356 call sites the ramp is remapped onto the new palette and those
        // pages repaint in place. Mapping follows how each shade is actually
        // used, not its old hue: 900/950 are body text, 100/200 are borders,
        // 500/600 are icons and links on light, 50 is the section tint.
        //
        // One exception could not be remapped: bg-brand-500 was a light fill
        // carrying dark text, while text-brand-500 was an icon colour on
        // white. A single value cannot serve both, so the fills were switched
        // to bg-mint-300 and this token took the readable text value.
        brand: {
          50: "#D9F2EA", // Mint 100, section tint
          100: "#DCE5E0", // border
          200: "#B9C6C1", // Gray 300, stronger border
          300: "#7FD4C1", // Mint 300
          400: "#7FD4C1", // Mint 300
          500: "#17706A", // Teal 500, icons and labels on light
          600: "#17706A", // Teal 500, links
          700: "#0F4A47", // Teal 700
          800: "#0F4A47", // Teal 700
          900: "#062421", // Ink, body copy
          950: "#062421", // Ink
        },

        gray: {
          50: "#F4F6F5",
          100: "#E8EDEB",
          200: "#DCE5E0",
          300: "#B9C6C1",
          400: "#8A9691",
          600: "#5F6F6A",
          700: "#3A4A45",
          800: "#1B2E2A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        // font-display now resolves to Newsreader, so the 11 existing
        // font-display call sites migrate without being edited.
        display: ["var(--font-newsreader)", "Georgia", "serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        // Dark wash: Teal 700 into Ink. Carries light text (Footer, CTA).
        "wash-deep": "linear-gradient(165deg, #0F4A47 0%, #062421 100%)",
        "wash-paper": "linear-gradient(165deg, #FBFAF7 0%, #F1E6CC 100%)",

        // Every stop stays light on purpose. This gradient does two opposite
        // jobs: it is the NotificationBar background, which carries dark ink
        // text, and it is clipped into the hero headline over dark video. A
        // dark stop would fail one or the other, so it runs Mint 300 to
        // Mint 100 to Sand 200 and never goes below Mint 300 in lightness.
        "brand-gradient":
          "linear-gradient(135deg, #7FD4C1 0%, #D9F2EA 50%, #F1E6CC 100%)",
        "brand-diagonal": "linear-gradient(120deg, #062421 0%, #0F4A47 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 74, 71, 0.25)",
        glow: "0 20px 60px -20px rgba(23, 112, 106, 0.45)",
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
