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
        // Base colors
        background: "#111012",
        foreground: "#FFFFFF",
        
        // Primary accents
        primary: {
          DEFAULT: "#9B79FF",
          foreground: "#FFFFFF",
          hover: "#AF94FF",
        },
        
        // Secondary UI elements
        secondary: {
          DEFAULT: "#7344FF",
          foreground: "#FFFFFF",
        },
        
        // Muted elements
        muted: {
          DEFAULT: "#27272A",
          foreground: "#A1A1AA",
        },
        
        // Card backgrounds
        card: {
          DEFAULT: "#18181B",
          foreground: "#FFFFFF",
          border: "#27272A",
        },
        
        // Accent colors
        accent: {
          DEFAULT: "#875FFF",
          foreground: "#FFFFFF",
        },
        
        // Destructive actions
        destructive: {
          DEFAULT: "#7F1D1D",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
