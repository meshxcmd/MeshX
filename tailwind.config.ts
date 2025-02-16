import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: {
          deep: "#1E1E3F",
          bright: "#8A7CFF",
          light: "#E6E1FF"
        },
        navy: "#0D0D1F",
        gray: "#F5F5F8",
        white: "#FFFFFF"
      },
    },
  },
  plugins: [],
} satisfies Config;
