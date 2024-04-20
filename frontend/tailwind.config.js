/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./index.html",
  ],
  prefix: "",
  theme: {
    backgroundImage: {
      login_signUp_url: "url('/Login_signup.svg')",
    },
    extend: {
      colors: {
        header_black: "#101928",
        light_gray: "#667185",
        white_bg: "#ffffff",
        "light_orange-bg": "#FFF7ED",
        light_blue: "#A5F3FC",
        "dark_orange-bg": "#EB580A",
        dark_blue: "#0691B2",
        dark_bg: "#111827",
        custom_dashboard: "#F1F5F9",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
