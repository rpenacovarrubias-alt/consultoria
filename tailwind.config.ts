import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f7f9fb',
        'on-surface': '#191c1e',
        'on-surface-variant': '#43474b',
        'outline-variant': '#c4c7cc',
        secondary: '#006c4a',
        'secondary-container': '#82f5c1',
        'surface-container-low': '#f2f4f6',
        'surface-container-lowest': '#ffffff',
        midnight: '#0B1A26',
        emerald: '#059669',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
