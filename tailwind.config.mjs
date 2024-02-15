/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      code: [
        "Menlo",
        "Monaco",
        "Lucida Console",
        "Courier New",
        "Courier",
        "monospace",
      ],
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "linear .3s fadeIn",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
