/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "break-1": "1000px",
        "break-2": "1600px",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  daisyui: {
    themes: [
      {
        shades: {
          "primary": "#e5e7eb",
          "secondary": "#152747",
          "accent": "#581c87",
          "neutral": "#111827",
          "base-100": "#111827",
          "info": "#0369a1",
          "success": "#15803d",
          "warning": "#eab308",
          "error": "#be123c",
        },
      },
      "dark"
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require('@tailwindcss/aspect-ratio'),
  ],
};
