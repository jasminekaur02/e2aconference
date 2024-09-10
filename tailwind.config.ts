import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
      },
      animation: {
        slideOutRight: 'slideOutRight 0.8s forwards',
        slideOutLeft: 'slideOutLeft 0.8s forwards',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',  // Correcting lg breakpoint back to 1024px
      xl: '1280px',  // Keeping xl at 1280px
    },
  },
  plugins: [],
};

export default config;
