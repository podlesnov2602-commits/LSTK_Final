/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Фирменная палитра — САМЫЕ ВАЖНЫЕ 6 ЦВЕТОВ
        "bg-primary": "#111415",
        "bg-secondary": "#171A1C",

        "text-primary": "#FFFFFF",
        "text-secondary": "#D4D4D4",

        "accent-primary": "#0A7A5F",
        "accent-bg": "rgba(10,122,95,0.12)",

        "border-subtle": "#1F2224",
      },

      // Радиусы карточек
      borderRadius: {
        card: "14px",
      },

      // Тени — премиальные, мягкие
      boxShadow: {
        card: "0 4px 16px rgba(0,0,0,0.25)",
        cardHover: "0 18px 40px rgba(0,0,0,0.45)",
      },

      // Контейнеры и отступы секций
      spacing: {
        section: "120px",
        sectionMd: "90px",
        sectionSm: "70px",
      },

      // Типографика
      fontSize: {
        displayLg: ["68px", { lineHeight: "1.1" }],
        displayMd: ["48px", { lineHeight: "1.2" }],
        displaySm: ["32px", { lineHeight: "1.3" }],

        bodyLg: ["20px", { lineHeight: "1.6" }],
        bodyMd: ["16px", { lineHeight: "1.65" }],
      },
    },
  },
  plugins: [],
};
