module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0f0f0f",
      primaryOposite: "#e9e9e9",
      primaryOpositeLight: "#454545",
      accent: "#A84556",
      gray: "#878787",
      accentLight: "#F4E6EC",
      grayInput: "#EDEDED",
      success: "#469049",
      highlightCard: "#ECECEC",
      bigSign: "#FF0000",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["Linden Hill", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
