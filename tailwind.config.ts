import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#141414",
        "surface-light": "#1e1e1e",
        accent: "#3b82f6",
        "accent-dark": "#2563eb",
        muted: "#6b7280",

        // --- TOTO JSOU PŘIDANÉ ŘÁDKY PRO OPRAVU CHYBY ---
        border: "#2e2e2e",      // Tmavě šedá pro rámečky
        input: "#2e2e2e",       // Barva pro input pole
        ring: "#3b82f6",        // Barva pro focus (použil jsem vaši accent barvu)
        foreground: "#ffffff",  // Pro jistotu textová barva
        // ------------------------------------------------
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
