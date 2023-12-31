/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-custom": "#f2f2f2",
        "blue-custom": "#2b6777",
        "blue-custom-darken": "#1b4953",
        eggshell: "#f2ead5",
        wheat: "#F5DEB3",
        "baby-blue": "#5f97f4",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      width: {
        calc: "calc(100% - 1.05rem)",
      },
    },
  },
  variants: {
    extend: {
      translate: ["responsive", "group-hover", "hover", "focus"],
      backgroundColor: [
        "responsive",
        "hover",
        "focus",
        "active",
        "group-hover",
      ],
      display: ["responsive", "group-hover", "group-focus"],
      borderWidth: ["responsive", "last"],
    },
  },
  plugins: [],
};
