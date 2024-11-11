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
        "main-color": "var(--main-color)",
        myBlack: "var(--black)",
      },
      fontFamily: {
        podcast: "var(--podcast)",
      },
      spacing: {
        "60": "13%",
        "9%": "9%",
        "1.2": "5px",
        "42": "168px",
        "33": "33px",
        "15": "60px",
        "30": "30px"
      },
      fontSize: {
        32: "32px"
      },
      screens: {
        '1187': "1187px",
        '858': "858px",
        '724': "724px",
        '594': "594px",
        '400': '400px'
      }
    },
    backgroundImage: {
      'pattern': "url('/images/Rectangle 51.png')",
    }
  },
  plugins: [],
} satisfies Config;
