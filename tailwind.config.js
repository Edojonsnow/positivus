/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        dark: "var(--color-dark)",
        bright: "var(--color-bright)",
        background: "var(--color-background)",
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        border: "var(--color-border)",
      },
      maxWidth: {
        container: "var(--max-width)",
      },
      fontFamily: {
        spg: ["var(--font-spg)"],
      },
    },
  },
  plugins: [],
};
