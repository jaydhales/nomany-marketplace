/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      none: "rgba(0,0,0,0)",
      white: "rgba(255, 255, 255, 1)",
      dark: "rgba(28, 28, 28, 1)",
      "gray-600": "rgba(80, 80, 80, 1)",
      "gray-500": "rgba(139, 150, 165, 1)",
      "gray-400": "rgba(189, 196, 205, 1)",
      "gray-300": "rgba(222, 226, 231, 1)",
      "gray-200": "rgba(239, 242, 244, 1)",
      "gray-100": "rgba(247, 250, 252, 1)",
      blue: "rgba(13, 110, 253, 1)",
      green: "rgba(0, 181, 23, 1)",
      orange: "rgba(243, 131, 50, 1)",
      red: "rgba(250, 52, 52, 1)",
      "light-blue": "rgba(227,240,255,1)",
      "light-green": "rgb(85,189, 195)",
    },
    fontSize: {
      title: "1rem",
      base: "1rem",
      info: "1rem",
      small: "0.81rem",
      large: "1.12rem",
      "title-h1": "3rem",
      "title-h2": "2rem",
      "title-h3": "1.5rem",
      "title-h4": "1.25rem",
      "title-h5": "1.12rem",
      "title-h6": "1rem",
    },
    fontWeight: {
      "title-h1": "600",
      "title-h2": "600",
      "title-h3": "600",
      "title-h4": "600",
      "title-h5": "600",
      "title-h6": "600",
      title: "500",
      base: "400",
      info: "400",
      small: "400",
      large: "500",
    },

    extend: {
      boxShadow: {
        input: "0px 0px 2px rgba(56, 56, 56, 0.25)",
        md: "0px 1px 2px rgba(56, 56, 56, 0.25)",
        sm: "0px 1px 2px rgba(56, 56, 56, 0.08)",
        lg: "0px 2px 8px rgba(80, 80, 80, 0.2)",
      },
    },
  },
  plugins: [],
};
