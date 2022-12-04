/**
 * Enables variable coloring with opacity.
 * @param {String} variableName - The CSS variable name.
 * @returns The function that allows opacity configuration.
 */
 function withOpacity(variableName) {
    return ({ opacityValue }) =>
      opacityValue !== undefined
        ? `rgba(var(${variableName}), ${opacityValue})`
        : `rgba(var(${variableName}))`;
  }

  module.exports = {
    mode: "jit",
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        sm: "640px",
        md: "786px",
        lg: "1024px",
      },

      fontFamily: {
        header: "var(--font-family-header)",
        body: "var(--font-family-body)",
      },

      fontSize: {
        xs: ["10px", "14px"],
        sm: ["14px", "18px"],
        md: ["16px", "24px"],
        xl: ["20px", "25px"],
        "2xl": ["28px", "35px"],
        "3xl": ["36px", "45px"],
        "4xl": ["44px", "48px"],
      },

      textColor: {
        base: withOpacity("--color-text-base"),
        highlight: withOpacity("--color-text-highlight"),
        "highlight-hover": withOpacity("--color-text-highlight-hover"),
        link: withOpacity("--color-text-link"),
        "link-hover": withOpacity("--color-text-link-hover"),
      },

      extend: {
        backgroundColor: {
          base: {
            DEFAULT: withOpacity("--color-background-base"),
            highlight: withOpacity("--color-background-highlight"),
          },
          scrollbar: {
            track: withOpacity("--color-scrollbar-track"),
            thumb: withOpacity("--color-scrollbar-thumb"),
          },
        },
        color: {
          white: withOpacity("--color-text-base"),
        },
      },
    },
    plugins: [],
  };