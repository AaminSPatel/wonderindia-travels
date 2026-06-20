/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.75rem",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.08)",
        "shadow-glass": "0 20px 60px rgba(0,0,0,0.18)",
        "shadow-neu": "4px 4px 16px rgba(0,0,0,0.08), -4px -4px 16px rgba(255,255,255,0.7)",
        "shadow-neu-dark": "4px 4px 16px rgba(0,0,0,0.45), -4px -4px 16px rgba(255,255,255,0.04)",
      },
      colors: {
        cream: "#F5F3EE",
        ink: "#0B1726",
        "deepblue": "#0A2A4A",
        "sunset": "#FF7A59",
        sky: "#7AD9FF",
        emerald: "#10B981",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        utility: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E)",
      },
    },
  },
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
    "./data/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  plugins: [],
};

