const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {
      colors: {
        customRed: '#E30613', // Convert RGB to Hex
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};