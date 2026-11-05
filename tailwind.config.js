/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff5500', // Iconic Solar Flame Orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#ff5500',
          dark: '#e04800',
          light: '#ff7733',
        },
        dark: {
          DEFAULT: '#121215',
          surface: '#18181D',
          border: '#282830',
          muted: '#71717A',
        },
        paper: {
          light: '#FFFFFF',
          DEFAULT: '#F8F8FA',
          subtle: '#F1F1F4',
          border: '#E4E4E8',
        }
      },
      fontFamily: {
        display: ['"Bangers"', 'Impact', '"Arial Narrow"', 'sans-serif'],
        tape: ['"Titan One"', '"Arial Black"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'cloud-bob': 'cloudBob 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        cloudBob: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-6px) scale(1.02)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'clean': '0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'lift': '0 30px 60px -20px rgba(255, 85, 0, 0.15), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'solid-brand': '4px 4px 0px 0px #121215',
        'solid-orange': '4px 4px 0px 0px #ff5500',
        'cloud': '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 8px 24px -4px rgba(255, 85, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
