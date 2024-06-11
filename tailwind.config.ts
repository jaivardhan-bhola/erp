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
      colors:{
        "background": "#cbd5e1",
        "navbar-bg": "black",
        "navbar-text": "white",
        "card-bg": "white",
        "card-text": "black",
        "button-cancel" : "#ef4444",
        "button-cancel-text": "white",
        "button-submit": "#22c55e",
        "button-submit-text": "black",

      }
    },
  },
  plugins: [
    function ({addUtilities}: any){
      const newUtilities = {
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
          ".no-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }
    }
    addUtilities(newUtilities)
  }
  ],
};
export default config;
