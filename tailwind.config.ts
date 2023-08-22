import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "--blue-dark": "#1e6f9f",
      "--blue": "#4ea8de",
      "--purple-dark": "#5e60ce",
      "--purple": "#8284fa",

      "--gray-700": "#0d0d0d",
      "--gray-600": "#1a1a1a",
      "--gray-500": "#262626",
      "--gray-400": "#333333",
      "--gray-300": "#808080",
      "--gray-200": "#d9d9d9",
      "--gray-100": "#f2f2f2",

      "--danger": "#e25858",
    },
  },
  plugins: [],
};
export default config;
