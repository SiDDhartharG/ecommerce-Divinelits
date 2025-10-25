/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill, minmax(250px, 1fr))",
        "auto-fill-350": "repeat(auto-fill, minmax(350px, 1fr))",
        "auto-fill-110": "repeat(auto-fill, minmax(110px, 1fr))",
        "auto-fill-32": "repeat(auto-fill, minmax(32px, 1fr))",
      },
      colors: {
        // Simplified DivineLits Color System
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          light: "var(--color-text-light)",
        },
        bg: {
          DEFAULT: "var(--color-bg)",
          card: "var(--color-bg-card)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          light: "var(--color-border-light)",
        },
        success: "var(--color-success)",
        error: "var(--color-error)",
        // Legacy colors for compatibility
        "divine-gold": {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#b8860b", // Primary gold
          600: "#a16207",
          700: "#854d0e",
          800: "#713f12",
          900: "#422006",
        },
        "divine-bronze": {
          50: "#fdfce8",
          100: "#faf7c3",
          200: "#f5ed8a",
          300: "#f0e047",
          400: "#e6d315",
          500: "#8b6508", // Primary bronze
          600: "#7c5a07",
          700: "#6b4e06",
          800: "#5a4205",
          900: "#3d2c03",
        },
        "divine-cream": {
          50: "#fefdf8",
          100: "#fdfbf0",
          200: "#faf6e0",
          300: "#f7f1d0",
          400: "#f4ecc0",
          500: "#f0e6b0", // Primary cream
          600: "#e6d9a0",
          700: "#dccc90",
          800: "#d2bf80",
          900: "#c8b270",
        },
        "divine-text": {
          50: "#f5f4f2",
          100: "#ebe9e5",
          200: "#d7d3cb",
          300: "#c3bdb1",
          400: "#afa797",
          500: "#2d2319", // Primary text
          600: "#251e16",
          700: "#1d1913",
          800: "#151410",
          900: "#0d0f0c",
        },
        // Legacy colors for compatibility
        "border-primary": "var(--color-border)",
        "border-secondary": "var(--color-primary-dark)",
        "background-secondary": "var(--color-bg)",
        "background-alert": "rgba(45, 35, 25, 0.9)",
        "color-secondary": "var(--color-text-light)",
        "color-tertiary": "var(--color-primary-dark)",
        999: "var(--color-primary-dark)",
      },
      height: {
        "60vh": "60vh",
        "80vh": "80vh",
        260: "260px",
      },
      minWidth: {
        "grid-img": "560px",
        250: "250px",
      },
      maxWidth: {
        img: "850px",
        350: "350px",
        90: "90%",
        180: "180px",
      },
      flexBasis: {
        600: "600px",
        800: "800px",
      },
      translate: {
        hide: "-100%",
      },
      screens: {
        xs: "350px",
      },
      flexGrow: {
        999: "999",
      },
      inset: {
        selected: "-7px",
      },
      fontSize: {
        13: "13px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
