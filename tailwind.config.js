/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        preset: {
          primary: 'var(--color-primary)',
          accent: 'var(--color-accent)',
          background: 'var(--color-bg)',
          card: 'var(--color-card)',
          textDark: 'var(--color-text-dark)',
          textMuted: 'var(--color-text-muted)',
          borderSubtle: 'var(--color-border)',
        }
      },
      fontFamily: {
        title: ['var(--font-title)', 'sans-serif'],
        dramatic: ['var(--font-dramatic)', 'serif'],
        data: ['var(--font-data)', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      }
    },
  },
  plugins: [],
}

