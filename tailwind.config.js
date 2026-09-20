/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0d0e11',
          card: '#14171d',
          surface: '#1b2029',
          border: '#2a313d',
          muted: '#8e99a8',
          accent: '#c5a880',      // refined champagne gold / warm architectural bronze
          accentHover: '#dbbe96',
          highlight: '#38bdf8'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
