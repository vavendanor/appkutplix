/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#EDC7FF', // Color fijo personalizado
        background: "var(--background)", // Color desde variable CSS
        foreground: "var(--foreground)", // Otro color desde variable CSS
      },
    },
  },
  plugins: [],
};
