/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
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
      width: {
        mobile: "375px",
      },
      fontSize: {
        h2: "40px",
        h3: "30px",
        h4: "20px",
        p: "18px",
      },
    },
  },
  plugins: [],
});
