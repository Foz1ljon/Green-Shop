/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        gren: "#46A358",
        lblack: "#3D3D3D",
        f5: "#F5F5F580",
        72: "#727272",
        fb: "#FBFBFB",
        a5: "#A5A5A5"
      },
    },
  },
  plugins: [],
};
