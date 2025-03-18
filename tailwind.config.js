module.exports = {
    theme: {
      extend: {
        keyframes: {
          slideDown: {
            from: { height: "0px" },
            to: { height: "auto" },
          },
          slideUp: {
            from: { height: "auto" },
            to: { height: "0px" },
          },
        },
        animation: {
          slideDown: "slideDown 0.3s ease-out",
          slideUp: "slideUp 0.3s ease-in",
        },
      },
    },
  };
  