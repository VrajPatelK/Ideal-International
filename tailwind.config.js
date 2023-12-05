/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
};

// sm: { min: "640px" },
// // => @media (max-width: 640px) { ... }

// md: { min: "768px" },
// // => @media (max-width: 768px) { ... }

// lg: { min: "1024px" },
// // => @media (max-width: 1024px) { ... }

// xl: { min: "1280px" },
// // => @media (max-width: 1280px) { ... }

// "2xl": { min: "1536px" },
// // => @media (max-width: 1536px) { ... }

// my_xs: { max: "576px" },
// // => @media (max-width: 576px) { ... }

// my_sm: { max: "640px" },
// // => @media (max-width: 640px) { ... }

// my_md: { max: "768px" },
// // => @media (max-width: 768px) { ... }

// my_lg: { max: "1024px" },
// // => @media (max-width: 1024px) { ... }

// my_xl: { max: "1280px" },
// // => @media (max-width: 1280px) { ... }

// my_2xl: { max: "1536px" },
// // => @media (max-width: 1536px) { ... }
